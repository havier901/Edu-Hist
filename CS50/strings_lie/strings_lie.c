#include <stdio.h>
#include <cs50.h>
#include <string.h>

int string_length(char *s);

int main(void)
{

    char *animal1 = get_string("Name an animal: ");
    char *animal2 = get_string("Name another one: ");

    printf("animal 1 is: %s, length is %i\n", animal1, string_length(animal1));
    printf("animal 2 is: %s, length is %i\n", animal2, string_length(animal2));

    printf("animal 1 is at %p\n", animal1);
    printf("animal 2 is at %p\n", animal2);

    if (strcmp(animal1, animal2) == 0) //they have the same content
    {
        printf("These are the same!\n");
    }
    else
    {
        printf("These are different!\n");
    }

}

int string_length(char *s)
{
    int length = 0;

    while (s[length] != '\0')
    {
        length++;
    }
    return length;
}