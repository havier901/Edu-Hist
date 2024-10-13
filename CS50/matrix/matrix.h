
//Define the default size of the matrix
#ifndef NUM_ROWS
#define NUM_ROWS 3
#endif

#ifndef NUM_COLS
#define NUM_COLS 3
#endif

// Global: the matrix. //Generally don't declare global variables in header files
extern int matrix[NUM_ROWS][NUM_COLS]; //2D array is a matrix

//Function to reset every value in the matrix to zero
void reset_matrix(int rows, int cols);

//A function to print every value in the Matrix
void print_matrix(int rows, int cols);

//A function that prompts the user to input values
void user_input(int rows, int cols);