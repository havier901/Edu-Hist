#include <cs50.h>
#include <stdio.h>
#include <string.h> //New header to include STRING librarys

int main(void)
{
    // Prompt for user's name
    string name = get_string("Name: ");
    int length = strlen(name);
    printf("%i\n", length);
}

