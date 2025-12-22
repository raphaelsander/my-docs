#!/bin/bash python3
import pickle
import sys
import struct
import hashlib
import hcshared
import hcmp
# custom lib for yescrypt calc_hash
from pyescrypt import Yescrypt, Mode

# Self-test hash and password for hash-mode 7300 (yescrypt)
ST_HASH = "$y$j9T$uxVFACnNnGBakt9MLrpFf0$SmbSZAge5oa1BfHPBxYGq3mITgHeO/iG2Mdfgo93UN0*$y$j9T$uxVFACnNnGBakt9MLrpFf0$"
ST_PASS = "password"

# In theory, you only have to re-implement this function...
def calc_hash(password: bytes, salt: dict) -> str:
  return Yescrypt(n=4096, r=32, p=1, mode=Mode.MCF).digest(
    password=password,
    settings=hcshared.get_salt_buf(salt)
  ).decode("utf-8")

# ...except when using an esalt. The esalt void* structure is both dynamic and specific to a hash mode.
# If you use an esalt, you must convert its contents into Python datatypes.
# If you don't use esalt, just return []
# For this example hash-mode, we kept it very general and pushed all salt data in a generic format of generic sizes
# As such, it has to go into esalt
def extract_esalts(esalts_buf):
  esalts=[]
  for hash_buf, hash_len, salt_buf, salt_len in struct.iter_unpack("1024s I 1024s I", esalts_buf):
    hash_buf = hash_buf[0:hash_len]
    salt_buf = salt_buf[0:salt_len]
    esalts.append({ "hash_buf": hash_buf, "salt_buf": salt_buf })
  return esalts

# From here you really can leave things as they are
# The init function is good for converting the hashcat data type because it is only called once
def kernel_loop(ctx,passwords,salt_id,is_selftest):
  return hcmp.handle_queue(ctx,passwords,salt_id,is_selftest)

def init(ctx):
  # Uncomment this line below to dump the hashcat ctx for your salted hash
  # hcshared.dump_hashcat_ctx(ctx, source=__name__)
  hcmp.init(ctx,extract_esalts)

def term(ctx):
  hcmp.term(ctx)


if __name__ == '__main__':
  # Main is only run when debugging this python script and never when -m 73000 is called directly from hashcat cli

  hcshared.add_hashcat_path_to_environment()
  # Load hashcat ctx from a file dumped when running -m 73000 . Optional argument is a Path() object to ctx file.
  ctx = hcshared.load_ctx(ST_HASH)
  init(ctx)

  hashcat_passwords = 256
  passwords = []
  for line in sys.stdin:
    passwords.append(bytes(line.rstrip(), 'utf-8'))
    if(len(passwords) == hashcat_passwords):
      hashes = kernel_loop(ctx,passwords,0,False)
      passwords.clear()
  hashes = kernel_loop(ctx,passwords,0,False) # remaining entries
  if hashes:
    print(hashes[-1])
  term(ctx)
