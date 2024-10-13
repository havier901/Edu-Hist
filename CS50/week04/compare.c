#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    //Get two integers
    char *s = get_string("i: ");
    char *t = get_string("j: ");

    //Compare intgers
    if (strcmp(s, t) == 0)
    {
        printf("Same\n");
    }
    else
    {
        printf("Different\n");
    }

    //Print strings' addresses
    printf("%p\n", s);
    printf("%p\n", t);
}
