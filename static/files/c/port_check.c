// gcc port_check.c -o port_check

#include <stdio.h>
#include <sys/socket.h>
#include <netdb.h>
#include <unistd.h>
#include <arpa/inet.h>

int main(void) {
    int new_socket;
    int new_connect;
    int port = 80;

    struct sockaddr_in target;

    new_socket = socket(AF_INET, SOCK_STREAM, 0);
    target.sin_family = AF_INET;
    target.sin_port = htons(port);
    target.sin_addr.s_addr = inet_addr("192.168.0.1");

    new_connect = connect(new_socket, (struct sockaddr *)&target, sizeof(target));

    if(new_connect == 0){
        printf("port %i open\n", port);
        close(new_socket);
        close(new_connect);
    } else {
        printf("port %i closed\n", port);
    }
    return 0;
}
