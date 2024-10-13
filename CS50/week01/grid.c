#include <cs50.h>
#include <stdio.h>

int main(void)
{

    /*
        There are 3 parts to the for-loop

        1. BEGIN: Initialization (int i = 0 is VERY common)
        2. EVERY ITERATION: Comparison
        3. AFTER each ITERATION: Do stuff at the end.
    */
    for(int row = 0; row < 3; row++)
    {
        for(int column = 0; column < 3; column++)
        {
            printf(" _ ");
        }
        printf("\n");
    }
}