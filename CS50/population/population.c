#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Declare variables here (scope)
    int start_size;
    int end_size;
    int years = 0;

    // Prompt for start size, and ensure it is >= 9
    do
    {
        start_size = get_int("Start size: ");
    }
    while (start_size < 9);

    // TODO: Prompt for end size, and ensure it is greater than or equal to start size
    do
    {
        end_size = get_int("End size: ");
    }
    while (end_size < start_size);

    // Calculate numbere of years until we reach threshold
    while (start_size < end_size)
    {
        start_size += start_size / 3 - start_size / 4;
        years++;
    }
    printf("Years: %i\n", years); // TODO: Print number of years
}
