#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int age = get_int("What is your age? "); //This time we initialized the variable when we declared it
    float cash = get_float("How much cash do you have? "); //Same as above
    string name; //This variable was not initialized on this line
    name = get_string("What's your name? ");

    printf("hello, %s\n", name);
    printf("I am %i years old. I have $%.2f.\n", age, cash);

    if (age >= 40)
    {
        printf("Don't forget to get a good night's sleep.\n");
    }
    else
    {
        printf("Let's party!\n");
    }
    return 0; // Success!
}
