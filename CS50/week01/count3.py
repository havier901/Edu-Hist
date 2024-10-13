#Up NEXT
#- Convert this to accept command-line arguments (instead of input())
#- Refactor the "counting" code into a function
#   -functions...
#   -modules (what does that mean?)

#n = input("Enter a number:") (deleted this for UP NEXT)
def counter(n):  #DOCstring
    """This function counts from 1 to n, printing the results.

    Example:

    >>> counter(3)
    - 1
    - 2
    - 3
    """
    #1. Look before you leap.
    #if not n.isnumeric():
    #   print(f"{n} does not look ike a number, sorry.")
    #    exit() #our program will stop here
    #n = int(n) #convert to an integer, method assumes user will input an int

    #2. It's better to ask forgiveness than permission.
    try:
        n = int(n) #convert to an integer
    except (TypeError, ValueError): #exception handler (kind of like an if statement)
            print(f"{n} does not look like a number.")
            exit()

    print(f"Counting to {n}:")

    count = 1
    while count <= n:
        print(f"- {count}")
        count += 1

if __name__ == "__main__": #The "main program", the Starting point, Entry point
    import sys

    if len(sys.argv) == 2:
        counter(sys.argv[1]) # e.g. ["count.py", "5"]
    else:
         print("Usage: python count.py <n>")

    #print(sys.argv) #system argument vector (array, list)

    #counter(3) #Call the function.