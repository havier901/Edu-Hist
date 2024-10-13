#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(string word);
int letterToPoints(char word[]); //Created this function myself

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Score both words
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // TODO: Print the winner
    if (score1 > score2)
    {
        printf("Player 1 wins!");
    }
    else if (score1 < score2)
    {
        printf("Player 2 wins!");
    }
    else
    {
        printf("Tie!");
    }
}

int compute_score(string word)
{
     // TODO: Compute and return score for string
    int score = 0;
    int length = strlen(word);

    for (int i = 0; i < length; i++)
    {
        word[i] = tolower(word[i]);
        score = score + letterToPoints(word[i]); //collect lettertopoints before in first
    }
    return score;
}

int letterToPoints(char c)
{
    switch(c) // Should I use isupper() here to change every letter to one size?
    {
        case 'a':
            return POINTS[0];
        case 'b':
            return POINTS[1];
        case 'c':
            return POINTS[2];
        case 'd':
            return POINTS[3];
        case 'e':
            return POINTS[4];
        case 'f':
            return POINTS[5];
        case 'g':
            return POINTS[6];
        case 'h':
            return POINTS[7];
        case 'i':
            return POINTS[8];
        case 'j':
            return POINTS[9];
        case 'k':
            return POINTS[10];
        case 'l':
            return POINTS[11];
        case 'm':
            return POINTS[12];
        case 'n':
            return POINTS[13];
        case 'o':
            return POINTS[14];
        case 'p':
            return POINTS[15];
        case 'q':
            return POINTS[16];
        case 'r':
            return POINTS[17];
        case 's':
            return POINTS[18];
        case 't':
            return POINTS[19];
        case 'u':
            return POINTS[20];
        case 'v':
            return POINTS[21];
        case 'w':
            return POINTS[22];
        case 'x':
            return POINTS[23];
        case 'y':
            return POINTS[24];
        case 'z':
            return POINTS[25];
        default:
            return: 0;
    }
}



