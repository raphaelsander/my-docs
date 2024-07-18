// gcc port_check.c -o port_check

#include <stdio.h>
#include <sys/socket.h>
#include <netdb.h>
#include <unistd.h>
#include <arpa/inet.h>

int main(void) {
    int sockfd;
    int connection;
    int port = 80;

    struct sockaddr_in target_addr;

    sockfd = socket(AF_INET, SOCK_STREAM, 0);

    if (sockfd < 0) {
        perror("socket");
        return 1;
    }
    
    target_addr.sin_family = AF_INET;
    target_addr.sin_port = htons(port);
    target_addr.sin_addr.s_addr = inet_addr("192.168.0.1");

    connection = connect(sockfd, (struct sockaddr *)&target_addr, sizeof(target_addr));

    if(connection == 0){
        printf("port %i open\n", port);
        close(sockfd);
        close(connection);
    } else {
        printf("port %i closed\n", port);
    }

    return 0;
}
