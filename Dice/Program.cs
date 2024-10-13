using System;

namespace Dice {

    class Die {

        //Allow derived classes (or subclasses) to "see" this attribute
        protected int sides;

        public Die() // Constructor Method. *Is optional
        {
            sides = 6; //Set a default number of sides.
        }

        //public Die(int num_sides)
        //{
            //sides = num_sides;
        //}

        public int roll() 
        {
            // TODO: Refactor this to return a value instead of printing it.
            var rand = new Random();
            return rand.Next(1, sides + 1);
            //Console.Write("Rolling a D{0}... ", sides);
            //Console.WriteLine("{0,3:N0}", rand.Next(1, sides + 1));
        }

        public string toString()
        {
            return $"[D{sides}]"; // e.g. D6 or D12
        }

        public static int operator+(Die a, Die b) // Overload the + operator to add our objects
        {
            return a.roll() + b.roll();
        }

        public static int operator+(int n, Die d) // Overload the + operator agai to add an object with an interger
        {
            return n + d.roll();
        }
    }

    class D6 : Die
    {
        public D6() 
        { // overloading the constructor
            sides = 6;
        }
    }

    class D12 : Die
    {
        public D12() 
        { // overloading the constructor
            sides = 12;
        }
    }

    class D20 : Die
    {
        public D20() 
        { // overloading the constructor
            sides = 20;
        }
    }

    class DiceMain {
        public static void Main() {

            int sum = 0; //sum up the dice rolls.

            var d6 = new D6();
            var d12 = new D12();
            var d20 = new D20();

            int roll; // hold the value of a single die roll.
            roll = d6.roll();
            Console.WriteLine($"{d6.toString()} rolled a {roll}");
            sum += roll;

            roll = d12.roll();
            Console.WriteLine($"{d12.toString()} rolled a {roll}");
            sum += roll;

            roll = d20.roll();
            Console.WriteLine($"{d20.toString()} rolled a {roll}");
            sum += roll;

            Console.WriteLine($"Total is {sum}");

            sum = d6 + d12 + d20;
            Console.WriteLine($"sum of all dice => {sum}");
        }
    }

}