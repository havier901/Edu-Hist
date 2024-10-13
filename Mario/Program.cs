using System;
using System.Dynamic;

namespace MarioProgram
{
    class Mario
    {   
        //Class Attributes
        private int height;

        //Class Methods
        public void getSize()
        {
            do{
                Console.Write("Height: ");
                string h = Console.ReadLine()!; //! = suppress warnings.
                int.TryParse(h, out height);
            } while (height < 1 || height > 8);
        }
        public void display()
        {
            for (int row = 0; row < height; row++)
            {
                for (int col = height - 1; col > 0; col--)
                {
                    if (col > row)
                    {
                        Console.Write(" ");
                    }
                    else
                    {
                        Console.Write("#");
                    }
                }
                Console.Write("#\n");
            }
        }
    }

    class MainProgram
    {
        public static void Main(string[] args)
        {
            Mario m = new Mario();
            m.getSize(); //prompt the user for a size.
            m.display(); 
        }
    }
}
