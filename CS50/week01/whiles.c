#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n = 0;

    // The do-while ALWAYS runs once
    do
    {
        printf("in the do-while, n = %i\n", n);
    }
    while (n != 0); //This is false!

    // While: Evaluate the condition FIRST, then act.
    while (n != 0)
    {
        printf("in the while, n = %i\n", n);
    }

    printf("We're done here\n");
}