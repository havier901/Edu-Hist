// Implements a dictionary's functionality

#include <ctype.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h> //Do I need strings and string??

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
} node;

// TODO: Choose number of buckets in hash table
const unsigned int N = 26;

// Hash table
node *table[N];

// Word Counter
int wordcounter = 0;

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    int index = hash(word);
    for (node *trav = table[index]; trav != NULL; trav = trav->next)
    {
        if (strcasecmp(word, trav->word) == 0)
        {
            return true;
        }
    }
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    int hashkey = 0;

    for (int i = 0; i < strlen(word); i++)
    {
        hashkey += tolower(word[i]);
    }
    return hashkey % 26;
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    char buffer[46];
    const char *infile = dictionary;

    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        return false;
    }

    while (fscanf(inptr, "%s", buffer) == 1)
    {
        node *n = malloc(sizeof(node));
        if (n == NULL)
        {
            fclose(inptr);
            return false;
        }
        strcpy(n->word, buffer);
        int index = hash(n->word);
        n->next = table[index];
        table[index] = n;
        wordcounter++;
    }
    fclose(inptr);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    return wordcounter;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    for (int i = 0; i < N; i++)
    {
        node *trav = table[i];

        while (trav != NULL)
        {
            node *ptr = trav->next;
            free(trav);
            trav = ptr;
        }
    }
    return true;
}

//Alternate unload attempt using recursion.
// void free_list(node * table_ptr)
// {
//     if (table_ptr == NULL)
//     {
//         return;
//     }

//     free_list(table_ptr->next);
//     free(table_ptr);
// }
