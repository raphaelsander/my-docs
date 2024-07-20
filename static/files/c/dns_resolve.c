// gcc dns_resolve.c -o dns_resolve

#include <stdio.h>
#include <netdb.h>
#include <arpa/inet.h>

int main(int argc, char *argv[]){
    if(argc <= 1){
        printf("Use: %s <hostname>\n", argv[0]);
    } else {
        struct hostent *target = gethostbyname(argv[1]);
        if(target == NULL){
            printf("hostname unreachable\n");
        } else {
            printf("IP: %s\n", inet_ntoa( * ((struct in_addr *) target -> h_addr)));
        }
    }
    return 0;
}
