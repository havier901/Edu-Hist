#include <cs50.h>
#include <ctype.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

// index = 0.0588 * L - 0.296 * S - 15.8
//  L is average number of letter per 100 words (L/W * 100), S is avg number of sentences per 100 words (S/W * 100)
int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

int main(void)
{
    string text = get_string("Text: ");
    int letters = count_letters(text);
    int words = count_words(text);
    int sentences = count_sentences(text);

    double index = 0.0588 * ((float) letters / words) * 100 - 0.296 * ((float) sentences / words) * 100 - 15.8;
    if (index >= 1 && index <= 15)
    {
        index = round(index);
        printf("Grade %i\n", (int)index);
    }
    else if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index >= 16)
    {
        printf("Grade 16+\n");
    }
    // printf("%i letters\n", letters);
    // printf("%i words\n", words);
    // printf("%i sentences\n", sentences);
}

int count_letters(string text)
{
    int text_length = strlen(text);
    int letters = 0;
    for (int i = 0; i < text_length; i++)
    {
        if (isalpha(text[i])) // Start here
        {
            letters++;
        }
    }
    return letters;
}

int count_words(string text)
{
    int text_length = strlen(text);
    int words = 1;
    for (int i = 0; i < text_length; i++)
    {
        if (isspace(text[i])) // Start here
        {
            words++;
        }
    }
    return words;
}

int count_sentences(string text)
{
    int text_length = strlen(text);
    int sentences = 0;
    for (int i = 0; i < text_length; i++)
    {
        if (text[i] == '.' || text[i] == '!' || text[i] == '?') // Start here
        {
            sentences++;
        }
    }
    return sentences;
}
