#!/usr/bin/python3

# https://requests.readthedocs.io/en/latest/
# Install Lib: python3 -m pip install requests
import requests
#https://docs.python.org/3/library/sys.html
import sys


if len(sys.argv) != 2:
    print(f"Use: {sys.argv[0]} <URL>")
    sys.exit(1)

try:
    r = requests.get(sys.argv[1])

    if r.status_code != requests.codes.ok:
        print(f"Status Code: {r.status_code}")

    print(f"Server: {r.headers['server']}")

except Exception as e:
    print(e)
    sys.exit(1)
