#!/usr/bin/python3

# To test this code, you can run in the Linux the tool called netcat, sending a
# message when a connection from this scritps happens, below how to start the
# netcat server to send 'hello', an stdout from 'echo' command:

# $ nc -lv 5050 < <(echo hello)
# Listening on 0.0.0.0 5050
# Connection received on localhost 46408
# world

# So, to test our script:
# $ python3 raw_tcp_connection.py 127.0.0.1 5050 world
# hello

# https://docs.python.org/3/library/ipaddress.html
import ipaddress
# https://docs.python.org/3/library/socket.html
import socket
# https://docs.python.org/3/library/sys.html
import sys


# check number of arguments
if len(sys.argv) != 4:
    print(f"Use: {sys.argv[0]} <IP> <port> <message>")
    sys.exit(1)
else:
    # check if first argument is a valid IP
    try:
        ipaddress.IPv4Address(sys.argv[1])
        ip = sys.argv[1]
    except ipaddress.AddressValueError:
        print("Invalid IP")
        sys.exit(1)

    # check if second argument is a valid IP port number
    if not (1 < int(sys.argv[2]) <= 65535):
        print("Port should be from 1 to 65535")
        sys.exit(1)
    else:
        port = int(sys.argv[2])

    sent_message = sys.argv[3]

# create a socket and do the connection
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
connection = sock.connect((ip, port))

# receive a max of 1024 bytes of data and decode it to string (UTF-8)
receive_message = sock.recv(1024)
print(receive_message.decode("utf-8"))

# encode from string to bytes and send with break line
sock.send(f"{sent_message}\n".encode('utf-8'))
