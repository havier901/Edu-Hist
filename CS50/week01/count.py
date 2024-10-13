#UP NEXT!
# - Convert this to accept command-line arguments (instead of input())
# - Refactor the "counting" code into a function
#   -functions...
#   -modules (what does that mean?)


def counter(n):  #DOCstring
    """This function counts from 1 to n.

    Example:

    >>> count(3)
    - 1
    - 2
    - 3

    """
    # 1. Look before you leap. (Input validation, popular in C)
    # if not n.isnumeric():
    #   print(f"{n} does not look like a number, sorry.")
    #   exit() # our program will stop here.
    # n = int(n)  # convert to an integer


    #2. Its better to ask forgiveness than permission. (Better for use in Python; TRY/EXCEPT BLOCK)
    try:
        n = int(n) # convert to an integer
    except (TypeError, ValueError): # exception handler
        print(f"{n} does not look like a number.")
        exit()


    print(f"Counting to {n}:")

    count = 1
    while count <= n:
        print(f"- {count}")
        count += 1 # increment prevents infinite loop

if __name__ == "__main__": # The "main program"
    import sys

    if len(sys.argv) == 2:
        counter(sys.argv[1]) # e.g. ["count.py", "5"]
    else:
        print("Usage: python count.py <n>")

    #print(sys.argv) # system argument vector (array, list)


    #counter(3) # Call the function.

#n = input("Enter a number: ") (Not needed for command line arguments)
