#!/usr/bin/python3

import sys
import socket

def get_whois_refer(domain: str) -> str:
    """Retrieve the WHOIS refer for a given domain."""

    # connect to the IANA WHOIS server to find the refer
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect(("whois.iana.org", 43))
    sock.sendall((domain + "\r\n").encode())
    response = sock.recv(4096).decode()
    sock.close()

    # parse the response to find the refer
    matched_lines = [line for line in response.split('\n') if "refer:" in line]
    refer = matched_lines[0].split(":")[1].strip() if matched_lines else None

    # if no refer found, raise an error
    if not refer:
        raise ValueError(f"No WHOIS refer found for domain: {domain}")

    return refer

def get_whois_info(domain: str) -> str:
    """Retrieve WHOIS information for a given domain."""
    
    # get the WHOIS refer for the domain
    whois_refer = get_whois_refer(domain)

    # connect to the WHOIS server and retrieve the information
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((whois_refer, 43))
    sock.sendall((domain + "\r\n").encode())
    # latin1 encoding is used to handle various character sets in WHOIS responses
    response = sock.recv(4096).decode(encoding="latin1", errors="replace")
    sock.close()

    return response

# check if the script is run with a domain
if len(sys.argv) != 2:
    print(f"Use: {sys.argv[0]} <DOMAIN>")
    sys.exit(1)

domain = sys.argv[1]

try:
    whois_info = get_whois_info(domain)
except ValueError as e:
    print(e)
    sys.exit(1)

print(whois_info)
