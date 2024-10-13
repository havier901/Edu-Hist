#include <stdio.h>
#include <cs50.h>
#include <string.h>

void reverse(string msg, int index)
{
    if(index <= strlen(msg))
    {
        //keep going
        reverse(msg, index + 1); //<-- MAGIC
        printf("%c", msg[index]);
    }
}

int main(void)
{
    string message = get_string("Message: ");
    printf("%s -> ", message);
    reverse(message, 0);
    printf("\n");
}