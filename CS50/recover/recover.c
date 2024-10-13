#include <cs50.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

typedef uint8_t BYTE;
int BLOCK_SIZE = 512;

bool jpgchk(BYTE *buffer);

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf("Usage: One filename.");
        return 1;
    }

    BYTE *buffer = malloc(BLOCK_SIZE);

    char *infile = argv[1];
    char outfile[8];
    int jpgname = 0;

    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        free(buffer);
        printf("Unable to open file: %s\n", infile);
        return 1;
    }

    FILE *outptr = NULL;

    while (fread(buffer, BLOCK_SIZE, 1, inptr))
    {
        if (jpgchk(buffer))
        {

            if (outptr != NULL)
            {
                fclose(outptr);
            }
            sprintf(outfile, "%03i.jpg", jpgname);
            outptr = fopen(outfile, "w");
            if (outptr == NULL)
            {
                free(buffer);
                fclose(inptr);
                printf("Could not create %s.\n", outfile);
                return 1;
            }
            jpgname++;
        }

        if (outptr != NULL)
        {
            fwrite(buffer, BLOCK_SIZE, 1, outptr);
        }
    }
    fclose(inptr);
    fclose(outptr);
    free(buffer);
    return 0;
}

bool jpgchk(BYTE *buffer)
{
    return (
        buffer[0] == 0xff &&
        buffer[1] == 0xd8 &&
        buffer[2] == 0xff &&
        (buffer[3] & 0xf0) == 0xe0);
}
