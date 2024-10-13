#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int i = 0; // counter value.
    float value = 10.0;

    while(value > 0)
    {
        value -= 0.1;
        i++;
        printf("%i: %0.1f\n", i, value); //%0.1f is a trick to take decimals to the 1st point
    }                                       // the number behind the decimal takes care of decimal places, number in front is for spaces to the left

    return 0; // What is this all about?
}