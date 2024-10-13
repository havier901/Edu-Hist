#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

//Prototypes
bool check_char(string key);
void alpha_convert(char pos, string key);

int main(int argc, string argv[])
{
    //Check for command-line argument
    if (argc != 2)
    {
        printf("Invalid usage.");
        return 1;
    }

    //Check Key for specifications
    if (!check_char(argv[1]))
    {
        printf("Key must contain 26 unique characters");
        return 1;
    }

    //TODO: Plaintext to Cyphertext
    string key = argv[1];
    string plaintext = get_string("Plaintext:  ");
    printf("Ciphertext: ");
    int plain_length = strlen(plaintext);
    for (int i = 0; i < plain_length; i++)
    {
        if (isalpha(plaintext[i]))
        {
            char x = plaintext[i];
            alpha_convert(x, key);
        }
        else
        {
            printf("%c", plaintext[i]);
        }
    }
    printf("\n");
    return 0;
}

//Functions
bool check_char(string key)
{
    //Check key length
    int key_length = strlen(key);
    if (key_length != 26)
    {
        return false;
    }

    //Check for non alphabetic characters
    for (int i = 0; i < key_length; i++)
    {
        if (!isalpha(key[i]))
        {
            return false;
        }
    }

    //check for doubled letters
    for (int i = 0; i < key_length; i++)
    {
        for (int j = i + 1; j < key_length; j++)
        {
            if (key[i] == key[j])
            {
                return false;
            }
        }
    }
    return true;
}

void alpha_convert(char pos, string key)
{
    string alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (int i = 0; i < strlen(alpha); i++)
    {
        if (islower(pos))
        {
            if (pos == tolower(alpha[i]))
            {
                printf("%c", tolower(key[i]));
            }
        }
        else
        {
            if (pos == toupper(alpha[i]))
            {
                printf("%c", toupper(key[i]));
            }
        }
    }
}
