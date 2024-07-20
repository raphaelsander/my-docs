// gcc port_check.c -o port_check

#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netdb.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <errno.h>

int is_invalid_ipv4(const char *ip) {
    struct sockaddr_in sa;
    int result = inet_pton(AF_INET, ip, &(sa.sin_addr));
    return result == 0;
}

int main(int argc, char *argv[]) {
    if(argc <= 2){
        printf("Use: %s <IP> <port>\n", argv[0]);
        return 1;
    }

    int sockfd;
    int connection;
    char *ip = argv[1];
    char *endptr;
    errno = 0;
    long port = strtol(argv[2], &endptr, 10);

    if (errno != 0 || *endptr != '\0' || port <= 0 || port > 65535) {
        printf("port should be a number between 0 and 65535\n");
        return 1;
    }

    if (is_invalid_ipv4(ip)) {
        printf("invalid IP\n");
        return 1;
    }

    struct sockaddr_in target_addr;

    sockfd = socket(AF_INET, SOCK_STREAM, 0);

    if (sockfd < 0) {
        perror("socket");
        return 1;
    }

    target_addr.sin_family = AF_INET;
    target_addr.sin_port = htons(port);
    target_addr.sin_addr.s_addr = inet_addr(ip);

    connection = connect(sockfd, (struct sockaddr *)&target_addr, sizeof(target_addr));

    if (connection == 0) {
        printf("port %ld open\n", port);
        close(sockfd);
        close(connection);
    } else {
        printf("port %ld closed\n", port);
    }

    return 0;
}
