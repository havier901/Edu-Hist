//#define NUM_ROWS 2
//#define NUM_COLS 2

#include <stdio.h> // <stdio.h> <- go to a STANDARD place and look for this.
#include "matrix.h" // "matrix.h" <-- look for this in your local directory

int main(void)
{
    // Initialize an empty matrix
    reset_matrix(NUM_ROWS, NUM_COLS);

    // print the matrix
    print_matrix(NUM_ROWS, NUM_COLS);

    // Ask the user to enter values for the matrix
    user_input(NUM_ROWS, NUM_COLS);
    print_matrix(NUM_ROWS, NUM_COLS);

    return 0;
}