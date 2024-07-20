// gcc port_scan.c -o port_scan

#include <stdio.h>
#include <sys/socket.h>
#include <netdb.h>
#include <unistd.h>
#include <arpa/inet.h>

int main(int argc, char *argv[]) {
    int sockfd;
    int connection;
    
    int port;
    int start_port = 0;
    int end_port = 65535;
    
    if(argc <= 1){
        printf("Use: %s <IP>\n", argv[0]);
        return 1;
    }

    char *target_ip = argv[1];

    struct sockaddr_in target_addr;

    for (int port=start_port; port < end_port; port++) {
        sockfd = socket(AF_INET, SOCK_STREAM, 0);

        if (sockfd < 0) {
            perror("socket");
            return 1;
        }
        
        target_addr.sin_family = AF_INET;
        target_addr.sin_port = htons(port);
        target_addr.sin_addr.s_addr = inet_addr(target_ip);

        connection = connect(sockfd, (struct sockaddr *)&target_addr, sizeof(target_addr));

        if(connection == 0){
            printf("port TCP/%i open\n", port);
            close(sockfd);
            close(connection);
        }
    }

    return 0;
}
