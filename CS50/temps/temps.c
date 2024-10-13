// Practice working with structs
// Practice applying sorting algorithms

#include <cs50.h>
#include <stdio.h>

#define NUM_CITIES 10 // Pre processor directive

typedef struct // typedef allows you to rename struct to avg_temp
{
    string city;
    int temp;
} avg_temp;


avg_temp temps[NUM_CITIES];

void sort_cities(void);

int main(void)
{
    temps[0].city = "Austin"; // dot notation is how you access an internal variable inside of a struct
    temps[0].temp = 97;

    temps[1].city = "Boston";
    temps[1].temp = 82;

    temps[2].city = "Chicago";
    temps[2].temp = 85;

    temps[3].city = "Denver";
    temps[3].temp = 90;

    temps[4].city = "Las Vegas";
    temps[4].temp = 105;

    temps[5].city = "Los Angeles";
    temps[5].temp = 82;

    temps[6].city = "Miami";
    temps[6].temp = 97;

    temps[7].city = "New York";
    temps[7].temp = 85;

    temps[8].city = "Phoenix";
    temps[8].temp = 107;

    temps[9].city = "San Francisco";
    temps[9].temp = 66;

    sort_cities();

    printf("\nAverage July Temperatures by City\n\n");

    for (int i = 0; i < NUM_CITIES; i++)
    {
        printf("%s: %i\n", temps[i].city, temps[i].temp);
    }
}

// TODO: Sort cities by temperature in descending order
// Bubble sort.
void sort_cities(void)
{
    bool swapped = false;
    do
    {
        swapped = false;
        for (int i = 0; i < NUM_CITIES - 1; i++)
        {
            if (temps[i].temp < temps[i + 1].temp)
            {
                // swap them? Need a temporary variable...
                string city;
                int temperature;

                // copy i+1 index into the temporary variables
                city = temps[i + 1].city;
                temperature = temps[i + 1].temp;

                // copy i index into i+1 index...
                temps[i + 1].city = temps[i].city;
                temps[i + 1].temp = temps[i].temp;

                // copy temporary variables back into i index
                temps[i].city = city;
                temps[i].temp = temperature;

                swapped = true;
            }
        }
    }
    while (swapped);
}
