#include <stdio.h>
#include <cs50.h>

int matrix[NUM_ROWS][NUM_COLS];

//Function to reset every value in the matrix to zero
void reset_matrix(int rows, int cols) //iterating through a 2D matrix takes a nested for loop
{
    for (int row = 0; row < rows; row++)
    {
        for (int col = 0; col < cols; col++)
        {
            matrix[row][col] = 0;
        }
    }
}

//A function to print every value in the Matrix
void print_matrix(int rows, int cols)
{
    for (int row = 0; row < rows; row++)
    {
        for (int col = 0; col < cols; col++)
        {
            printf("%3i | ", matrix[row][col]);
        }
        printf("\n");
    }
}

//A function that prompts the user to input values
void user_input(int rows, int cols)
{
    for (int row = 0; row < rows; row++)
    {
        for (int col = 0; col < cols; col++)
        {
            matrix[row][col] = get_int("Enter a value for (%i, %i): ", row, col);
        }
    }
}