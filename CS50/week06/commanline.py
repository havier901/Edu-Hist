# Prints a command-line argument

from sys import argv

if len(argv) == 2:
    print(f"hello, {argv[1]}")
else:
    print("hello, world")

# Print all arguments in argv

#Printing command-line arguments, indexing into argv

from sys import argv
for i in range(len(argv)):
    print(argv[i])
