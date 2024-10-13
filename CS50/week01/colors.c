#include <cs50.h>
#include <stdio.h>

// Global variable
const int RED = 1;
const int PURPLE = 2;
const int YELLOW = 3;
const int GREEN = 4;
const int BROWN = 5;
const int BLACK = 6;
const int ORANGE = 7;
const int BLUE = 8;


// Function prototypes (or signatures) aka Function Header
int isPrimary(int color); // Determine if a given color is a Primary color.
string colorToString(int color); // Return a string name for a numeric color.


int main(void)
{
    printf("1. red\n2. purple\n3. yellow\n4. green\n5. brown\n");
    printf("6. black\n7. orange\n8. blue\n");

    int color = get_int("What is your favorite color? ");

    if(isPrimary(color))
    {
        printf("Nice! %s is a primary color!\n", colorToString(color));
    }
    else
    {
        printf("%s is a pretty color.\n", colorToString(color));
    }
}

// Function Implementations go below.

int isPrimary(int color)
{
    //return color == RED || color == BLUE || color == YELLOW <-- sweeter code than below

    if(color == RED || color == BLUE || color == YELLOW)
    {
        return 1; // 1 = True.
    }
    return 0;
}

string colorToString(int color)
{
    switch(color)
    {
        case RED:
            return "red";
            break; // stop evaluating the rest of the cases
        case PURPLE:
            return "purple";
            break; // Would need a break for every case, but we don't need any breaks in our case since we have returns
        case YELLOW:
            return "yellow";
            break;
        case GREEN:
            return "green";
        case BROWN:
            return "brown";
        default:
            return "that";
    }
}