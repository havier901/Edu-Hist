// Check that a password has at least one lowercase letter, uppercase letter, number and symbol
// Practice iterating through a string
// Practice using the ctype library

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

bool valid(string password);

int main(void)
{
    string password = get_string("Enter your password: ");
    if (valid(password))
    {
        printf("Your password is valid!\n");
    }
    else
    {
        printf("Your password needs at least one uppercase letter, lowercase letter, number and symbol\n");
    }
}

// Complete the Boolean function below
bool valid(string password)
{
    //SCOPE -- the lifetime of a variable is within the curly brackets
    bool has_lower = false;
    bool has_upper = false;
    bool has_number = false;
    bool has_symbol = false;

    //inspect every char in the string
    for(int i = 0; i < strlen(password); i++)
    {
        char c = password[i]; //the current character

        if(islower(c))
        {
            has_lower = true;
        }
        else if(isupper(c))
        {
            has_upper = true;
        }
        else if(isdigit(c))
        {
            has_number = true;
        }
        else
        {
            has_symbol = true;
        }
    }
    //&& -- AND: All have to be true for the whole to be true.
    //|| -- OR: Any of the parts need to be true for the whole to be true.
    return has_lower && has_upper && has_number && has_symbol;
}
