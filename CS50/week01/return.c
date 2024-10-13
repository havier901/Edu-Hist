/*What's the difference between return 0 and return 1?
*/

#include <cs50.h>
#include <stdio.h>

int main(void)
{
   int number = get_int("Enter an even number: ");

   //is it odd?
   //If the number is odd, end the program unsuccesfully.
   if(number % 2 != 0) // % is the modulo operator
   {
        printf("Nope, that's odd.\n");
        return 1; // end with an error.
   }
    printf("Yep!\n");
    return 0; // Program ends successfully
}