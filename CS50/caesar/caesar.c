#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

string caesar(string plaintext, int key);

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
    else if (atoi(argv[1]) < 1)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    for (int i = 0; i < strlen(argv[1]); i++)
    {
        if (!isdigit(argv[1][i]))
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
    }

    int key = atoi(argv[1]);
    string plaintext = get_string("plaintext:  ");
    string cyphertext = caesar(plaintext, key);

    printf("ciphertext: %s\n", cyphertext);
    return 0;
}

string caesar(string plaintext, int key)
{
    int length = strlen(plaintext);
    for (int i = 0; i < length; i++)
    {
        if (isalpha(plaintext[i]) && isupper(plaintext[i]))
        {
            plaintext[i] = ((plaintext[i] - 'A' + key) % 26) + 65;
        }
        else if (isalpha(plaintext[i]) && islower(plaintext[i]))
        {
            plaintext[i] = ((plaintext[i] - 'a' + key) % 26) + 97;
        }
    }
    return plaintext;
}
