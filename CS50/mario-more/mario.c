#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n = get_int("Height: ");
        if (n >= 1) //|| n >= 8)
        {
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    printf("#");
                }
            }
        }   printf("\n");
        return 0;
 }

