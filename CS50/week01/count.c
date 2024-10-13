#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>

//argc - Argument count: how many things got passed in
// argv - Argument vector (array)
int main(int argc, string argv[]) //What??
{
    printf("argc = %i\n", argc);
    printf("argv[0] = %s\n", argv[0]);
    printf("argv[1] = %s\n", argv[1]);

    int number = atoi(argv[1]); //atoi function changes string to integer
    printf("counting to %i\n", number);

    for(int i = 1; i <= number; i++)
    {
        printf("- %i\n", i);
    }
}