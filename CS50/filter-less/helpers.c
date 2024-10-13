#include "helpers.h"
#include <math.h>

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            float gray_avg = (image[i][j].rgbtBlue + image[i][j].rgbtGreen + image[i][j].rgbtRed) / 3.0;

            image[i][j].rgbtBlue = round(gray_avg);
            image[i][j].rgbtGreen = round(gray_avg);
            image[i][j].rgbtRed = round(gray_avg);
        }
    }
    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            float sepiaBlue = (.272 * image[i][j].rgbtRed) + (.534 * image[i][j].rgbtGreen) + (.131 * image[i][j].rgbtBlue);
            float sepiaGreen = (.349 * image[i][j].rgbtRed) + (.686 * image[i][j].rgbtGreen) + (.168 * image[i][j].rgbtBlue);
            float sepiaRed = (.393 * image[i][j].rgbtRed) + (.769 * image[i][j].rgbtGreen) + (.189 * image[i][j].rgbtBlue);

            if (sepiaBlue > 255)
            {
                sepiaBlue = 255;
            }
            else if (sepiaBlue < 0)
            {
                sepiaBlue = 0;
            }

            if (sepiaGreen > 255)
            {
                sepiaGreen = 255;
            }
            else if (sepiaGreen < 0)
            {
                sepiaGreen = 0;
            }

            if (sepiaRed > 255)
            {
                sepiaRed = 255;
            }
            else if (sepiaRed < 0)
            {
                sepiaRed = 0;
            }

            image[i][j].rgbtBlue = round(sepiaBlue);
            image[i][j].rgbtGreen = round(sepiaGreen);
            image[i][j].rgbtRed = round(sepiaRed);
        }
    }
    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE copy[height][width];

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            copy[i][j] = image[i][j];
        }
    }

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            RGBTRIPLE tmp;
            RGBTRIPLE a = copy[i][j];
            RGBTRIPLE b = copy[i][(width - 1) - j];
            tmp = a;
            a = b;
            b = tmp;

            image[i][j] = a;
            image[i][(width - 1) - j] = b;
        }
    }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE copy[height][width];

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            copy[i][j] = image[i][j];
        }
    }

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            // Base Cases
            if ((i != 0 && i != height - 1) && (j != 0 && j != width - 1))
            {
                float blueAvg = (copy[i][j - 1].rgbtBlue + copy[i][j].rgbtBlue + copy[i][j + 1].rgbtBlue +
                                 copy[i - 1][j - 1].rgbtBlue + copy[i - 1][j].rgbtBlue + copy[i - 1][j + 1].rgbtBlue +
                                 copy[i + 1][j - 1].rgbtBlue + copy[i + 1][j].rgbtBlue + copy[i + 1][j + 1].rgbtBlue) /
                                9.0;
                image[i][j].rgbtBlue = round(blueAvg);
                float greenAvg = (copy[i][j - 1].rgbtGreen + copy[i][j].rgbtGreen + copy[i][j + 1].rgbtGreen +
                                  copy[i - 1][j - 1].rgbtGreen + copy[i - 1][j].rgbtGreen + copy[i - 1][j + 1].rgbtGreen +
                                  copy[i + 1][j - 1].rgbtGreen + copy[i + 1][j].rgbtGreen + copy[i + 1][j + 1].rgbtGreen) /
                                 9.0;
                image[i][j].rgbtGreen = round(greenAvg);
                float redAvg = (copy[i][j - 1].rgbtRed + copy[i][j].rgbtRed + copy[i][j + 1].rgbtRed + copy[i - 1][j - 1].rgbtRed +
                                copy[i - 1][j].rgbtRed + copy[i - 1][j + 1].rgbtRed + copy[i + 1][j - 1].rgbtRed +
                                copy[i + 1][j].rgbtRed + copy[i + 1][j + 1].rgbtRed) /
                               9.0;
                image[i][j].rgbtRed = round(redAvg);
            }
            // Corner Cases
            if (i == 0 && j == 0)
            {
                float blueCorner =
                    (copy[i][j].rgbtBlue + copy[i][j + 1].rgbtBlue + copy[i + 1][j].rgbtBlue + copy[i + 1][j + 1].rgbtBlue) / 4.0;
                image[i][j].rgbtBlue = round(blueCorner);
                float greenCorner =
                    (copy[i][j].rgbtGreen + copy[i][j + 1].rgbtGreen + copy[i + 1][j].rgbtGreen + copy[i + 1][j + 1].rgbtGreen) /
                    4.0;
                image[i][j].rgbtGreen = round(greenCorner);
                float redCorner =
                    (copy[i][j].rgbtRed + copy[i][j + 1].rgbtRed + copy[i + 1][j].rgbtRed + copy[i + 1][j + 1].rgbtRed) / 4.0;
                image[i][j].rgbtRed = round(redCorner);
            }

            if (i == height - 1 && j == 0)
            {
                float blueCorner =
                    (copy[i][j].rgbtBlue + copy[i - 1][j].rgbtBlue + copy[i - 1][j + 1].rgbtBlue + copy[i][j + 1].rgbtBlue) / 4.0;
                image[i][j].rgbtBlue = round(blueCorner);
                float greenCorner =
                    (copy[i][j].rgbtGreen + copy[i - 1][j].rgbtGreen + copy[i - 1][j + 1].rgbtGreen + copy[i][j + 1].rgbtGreen) /
                    4.0;
                image[i][j].rgbtGreen = round(greenCorner);
                float redCorner =
                    (copy[i][j].rgbtRed + copy[i - 1][j].rgbtRed + copy[i - 1][j + 1].rgbtRed + copy[i][j + 1].rgbtRed) / 4.0;
                image[i][j].rgbtRed = round(redCorner);
            }

            if (i == 0 && j == width - 1)
            {
                float blueCorner =
                    (copy[i][j].rgbtBlue + copy[i][j - 1].rgbtBlue + copy[i + 1][j - 1].rgbtBlue + copy[i + 1][j].rgbtBlue) / 4.0;
                image[i][j].rgbtBlue = round(blueCorner);
                float greenCorner =
                    (copy[i][j].rgbtGreen + copy[i][j - 1].rgbtGreen + copy[i + 1][j - 1].rgbtGreen + copy[i + 1][j].rgbtGreen) /
                    4.0;
                image[i][j].rgbtGreen = round(greenCorner);
                float redCorner =
                    (copy[i][j].rgbtRed + copy[i][j - 1].rgbtRed + copy[i + 1][j - 1].rgbtRed + copy[i + 1][j].rgbtRed) / 4.0;
                image[i][j].rgbtRed = round(redCorner);
            }

            if (i == height - 1 && j == width - 1)
            {
                float blueCorner =
                    (copy[i][j].rgbtBlue + copy[i][j - 1].rgbtBlue + copy[i - 1][j - 1].rgbtBlue + copy[i - 1][j].rgbtBlue) / 4.0;
                image[i][j].rgbtBlue = round(blueCorner);
                float greenCorner =
                    (copy[i][j].rgbtGreen + copy[i][j - 1].rgbtGreen + copy[i - 1][j - 1].rgbtGreen + copy[i - 1][j].rgbtGreen) /
                    4.0;
                image[i][j].rgbtGreen = round(greenCorner);
                float redCorner =
                    (copy[i][j].rgbtRed + copy[i][j - 1].rgbtRed + copy[i - 1][j - 1].rgbtRed + copy[i - 1][j].rgbtRed) / 4.0;
                image[i][j].rgbtRed = round(redCorner);
            }

            // //Edge Cases
            if ((i == 0 && j != 0) && (i == 0 && j != width - 1))
            {
                float blueEdge = (copy[i][j].rgbtBlue + copy[i][j - 1].rgbtBlue + copy[i + 1][j - 1].rgbtBlue +
                                  copy[i + 1][j].rgbtBlue + copy[i + 1][j + 1].rgbtBlue + copy[i][j + 1].rgbtBlue) /
                                 6.0;
                image[i][j].rgbtBlue = round(blueEdge);
                float greenEdge = (copy[i][j].rgbtGreen + copy[i][j - 1].rgbtGreen + copy[i + 1][j - 1].rgbtGreen +
                                   copy[i + 1][j].rgbtGreen + copy[i + 1][j + 1].rgbtGreen + copy[i][j + 1].rgbtGreen) /
                                  6.0;
                image[i][j].rgbtGreen = round(greenEdge);
                float redEdge = (copy[i][j].rgbtRed + copy[i][j - 1].rgbtRed + copy[i + 1][j - 1].rgbtRed + copy[i + 1][j].rgbtRed +
                                 copy[i + 1][j + 1].rgbtRed + copy[i][j + 1].rgbtRed) /
                                6.0;
                image[i][j].rgbtRed = round(redEdge);
            }

            if ((j == 0 && i != 0) && (j == 0 && i != height - 1))
            {
                float blueEdge = (copy[i][j].rgbtBlue + copy[i - 1][j].rgbtBlue + copy[i - 1][j + 1].rgbtBlue +
                                  copy[i][j + 1].rgbtBlue + copy[i + 1][j + 1].rgbtBlue + copy[i + 1][j].rgbtBlue) /
                                 6.0;
                image[i][j].rgbtBlue = round(blueEdge);
                float greenEdge = (copy[i][j].rgbtGreen + copy[i - 1][j].rgbtGreen + copy[i - 1][j + 1].rgbtGreen +
                                   copy[i][j + 1].rgbtGreen + copy[i + 1][j + 1].rgbtGreen + copy[i + 1][j].rgbtGreen) /
                                  6.0;
                image[i][j].rgbtGreen = round(greenEdge);
                float redEdge = (copy[i][j].rgbtRed + copy[i - 1][j].rgbtRed + copy[i - 1][j + 1].rgbtRed + copy[i][j + 1].rgbtRed +
                                 copy[i + 1][j + 1].rgbtRed + copy[i + 1][j].rgbtRed) /
                                6.0;
                image[i][j].rgbtRed = round(redEdge);
            }

            if ((j == width - 1 && i != 0) && (j == width - 1 && i != height - 1))
            {
                float blueEdge = (copy[i][j].rgbtBlue + copy[i - 1][j].rgbtBlue + copy[i - 1][j - 1].rgbtBlue +
                                  copy[i][j - 1].rgbtBlue + copy[i + 1][j - 1].rgbtBlue + copy[i + 1][j].rgbtBlue) /
                                 6.0;
                image[i][j].rgbtBlue = round(blueEdge);
                float greenEdge = (copy[i][j].rgbtGreen + copy[i - 1][j].rgbtGreen + copy[i - 1][j - 1].rgbtGreen +
                                   copy[i][j - 1].rgbtGreen + copy[i + 1][j - 1].rgbtGreen + copy[i + 1][j].rgbtGreen) /
                                  6.0;
                image[i][j].rgbtGreen = round(greenEdge);
                float redEdge = (copy[i][j].rgbtRed + copy[i - 1][j].rgbtRed + copy[i - 1][j - 1].rgbtRed + copy[i][j - 1].rgbtRed +
                                 copy[i + 1][j - 1].rgbtRed + copy[i + 1][j].rgbtRed) /
                                6.0;
                image[i][j].rgbtRed = round(redEdge);
            }

            if ((i == height - 1 && j != 0) && (i == height - 1 && j != width - 1))
            {
                float blueEdge = (copy[i][j].rgbtBlue + copy[i][j + 1].rgbtBlue + copy[i - 1][j + 1].rgbtBlue +
                                  copy[i - 1][j].rgbtBlue + copy[i - 1][j - 1].rgbtBlue + copy[i][j - 1].rgbtBlue) /
                                 6.0;
                image[i][j].rgbtBlue = round(blueEdge);
                float greenEdge = (copy[i][j].rgbtGreen + copy[i][j + 1].rgbtGreen + copy[i - 1][j + 1].rgbtGreen +
                                   copy[i - 1][j].rgbtGreen + copy[i - 1][j - 1].rgbtGreen + copy[i][j - 1].rgbtGreen) /
                                  6.0;
                image[i][j].rgbtGreen = round(greenEdge);
                float redEdge = (copy[i][j].rgbtRed + copy[i][j + 1].rgbtRed + copy[i - 1][j + 1].rgbtRed + copy[i - 1][j].rgbtRed +
                                 copy[i - 1][j - 1].rgbtRed + copy[i][j - 1].rgbtRed) /
                                6.0;
                image[i][j].rgbtRed = round(redEdge);
            }
        }
    }
    return;
}
