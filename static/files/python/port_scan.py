#!/usr/bin/python3

# https://docs.python.org/3/library/ipaddress.html
import ipaddress
# https://docs.python.org/3/library/socket.html
import socket
# https://docs.python.org/3/library/sys.html
import sys


start_port = 1
end_port = 65535

if len(sys.argv) != 2:
    print(f"Use: {sys.argv[0]} <IP>")
    sys.exit(1)
else:
    try:
        ipaddress.IPv4Address(sys.argv[1])
        ip = sys.argv[1]
    except ipaddress.AddressValueError:
        print("Invalid IP")
        sys.exit(1)

for port in range(start_port, end_port + 1):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    try:
        sock.connect((ip, port))
        print(f"Port {port} open")
    except:
        pass
