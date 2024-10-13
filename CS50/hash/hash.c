#include <stdio.h>
#include <ctype.h>

#define MAX_WORD_SIZE 100

//The simple has function used in pset5: speller
int hash(const char* word)
{
    return toupper(word[0]) - 'A'; //first letter's position in the alphabet
}

//this program reads words from the given input argumet,
//then prints each word & it's hash
int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./hash <filename>\n");
        return 1;
    }

    char * filename = argv[1];

    FILE *file = fopen(filename, "r");

    //check if we were able to open the file
    if (file == NULL)
    {
        printf("Unable to open file: %s\n", filename);
        return 2;
    }

    //read each word from the file (you don't have to dynamically allocate memory, if you just want to read a word)
    char word[MAX_WORD_SIZE];

    while(fscanf(file, "%s", word) != EOF)
    {
        printf("%s hashes to %i\n", word, hash(word));
    }

    return 0;

}