/*
Q: What are arrays?
A: A place to store multiple values (of the same data type)
*/

#include <cs50.h>
#include <stdio.h>

//const int LEN = 3; // size of the scores array

int main(void)
{
    //enter some test scores, compute an avg.
    int LEN = get_int("How many scores? "); //Variable length array or VLA
    int scores[LEN]; // an array with space for 5 integer values.

    int i = 0;
    do{
        scores[i] = get_int("Score: "); //Populate array with do while loop
        i++;
    }
    while(i < LEN);

    // Print the scores out for the user
    printf("You entered: ");
    for(int j = 0; j < LEN; j++)
    {
        printf("%i", scores[j]);
        //should I print a comma?
        if(j < LEN - 1)
        {
            printf(", ");
        }
        else
        {
            printf(".");
        }
    }
    printf("\n");

    //TODO: calculate a MEAN (average)
    int sum = 0;
    for(int j = 0; j < LEN; j++)
    {
        sum = sum + scores[j];
    }

    float avg = (float)sum / LEN; // cast sum as a float aka type cast
    printf("AVG: %.2f\n", avg);// Prints avg with 2 decimal points
}