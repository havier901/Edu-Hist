#include <cs50.h>
#include <stdio.h>

void meow(int n); //prototype

int main(void) //main function
{
    int x = get_int("How many meows? ");
    meow(x);
}

void meow(int n) //meow function
{
    for (int i = 0; i < n; i++)
    {
        printf("meow\n");
    }
}
