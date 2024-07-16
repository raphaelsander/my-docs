// gcc dns_resolve.c -o dns_resolve

#include <stdio.h>
#include <netdb.h>
#include <arpa/inet.h>

int main(int argc, char *argv[]){
    if(argc <= 1){
        printf("Use: ./resolve <hostname>\n");
    } else {
        struct hostent *alvo = gethostbyname(argv[1]);
        if(alvo == NULL){
            printf("hostname unreachable\n");
        } else {
            printf("IP: %s\n", inet_ntoa( * ((struct in_addr *) alvo -> h_addr)));
        }
    }
    return 0;
}
