from cs50 import get_float
from math import floor


def main():
    cents = get_cents()

    quarters = calculate_quarters(cents)
    cents = cents - quarters * 25

    dimes = calculate_dimes(cents)
    cents = cents - dimes * 10

    nickels = calculate_nickels(cents)
    cents = cents - nickels * 5

    pennies = calculate_pennies(cents)

    coins = quarters + nickels + dimes + pennies

    print(f"{coins}")


def get_cents():
    while True:
        c = get_float("Change owed: ")
        if c > 0:
            c = c * 100
            return c


def calculate_quarters(cents):
    q = 0
    if cents >= 25:
        q = cents / 25
        q = floor(q)
    return q


def calculate_dimes(cents):
    d = 0
    if cents >= 10:
        d = cents / 10
        d = floor(d)
    return d


def calculate_nickels(cents):
    n = 0
    if cents >= 5:
        n = cents / 5
        n = floor(n)
    return n


def calculate_pennies(cents):
    p = 0
    if cents >= 1:
        p = cents / 1

    return p


main()
