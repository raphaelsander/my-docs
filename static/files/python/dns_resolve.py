#!/usr/bin/python3

# https://docs.python.org/3/library/socket.html
import socket
# https://docs.python.org/3/library/sys.html
import sys


if len(sys.argv) != 2:
    print(f"Use: {sys.argv[0]} <hostname>")
    sys.exit(1)    

try:
    ip = socket.gethostbyname(sys.argv[1])
    print(ip)
except:
    print("Hostname unreachable")
