#include <stdio.h>

int main(void)
{

    int i = 10;
    int* addr = &i;

    printf("i = %i\n", i);
    //& == address of operator.
    printf("addr = %p\n", addr);

    // * == dereferencing operator
    printf("*addr = %i\n", *addr);
    *addr = 42;

    printf("i = %i\n", i);
}