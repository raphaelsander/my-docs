// gcc port_scan.c -o port_scan

#include <stdio.h>
#include <sys/socket.h>
#include <netdb.h>
#include <unistd.h>
#include <arpa/inet.h>

int main(int argc, char *argv[]) {
    int socket_fd;
    int connection_status;
    
    int port;
    int start_port = 0;
    int end_port = 65535;
    
    if(argc <= 1){
        printf("Use: ./port_scan <IP>\n");
        return 1;
    }

    char *target_ip = argv[1];

    struct sockaddr_in target_addr;

    for(int port=start_port; port < end_port; port++){
        socket_fd = socket(AF_INET, SOCK_STREAM, 0);
        target_addr.sin_family = AF_INET;
        target_addr.sin_port = htons(port);
        target_addr.sin_addr.s_addr = inet_addr(target_ip);

        connection_status = connect(socket_fd, (struct sockaddr *)&target_addr, sizeof(target_addr));

        if(connection_status == 0){
            printf("port TCP/%i open\n", port);
            close(socket_fd);
            close(connection_status);
        }
    }

    return 0;
}
