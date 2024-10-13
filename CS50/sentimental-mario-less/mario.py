from cs50 import get_int


def main():
    height = get_height()
    for i in range(height):
        for j in reversed(range(height)):
            if j > i:
                print(" ", end="")
        for k in range(height):
            if k <= i:
                print("#", end="")
        print()


def get_height():
    while True:
        n = get_int("Height: ")
        if n > 0 and n < 9:
            return n


main()
