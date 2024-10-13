#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    FILE* file = fopen("phonebook.csv", "a"); //a stands for append mode, asterisk can move to the other side
    if (file == NULL)
    {
        printf("Unable to open the file\n");
        return 1;
    }

    string name = get_string("Name: ");
    string number = get_string("Phone number: ");

    fprintf(file, "%s, %s\n", name, number);
    fclose(file); // always close your file.

}