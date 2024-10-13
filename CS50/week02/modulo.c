#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int value = get_int("Enter an integer: ");

    // 0 % value = ?
    // 1 % value = ?
    //....

    for(int i = 0; i <= 10; i++)
    {
        printf("%i mod %i = %i\n", i, value, i % value);
    }
}