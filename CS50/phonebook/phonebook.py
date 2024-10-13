from cs50 import get_string
name = get_string("What is your name?")

# This is a dictionry, aka: dict
people = {
    "Carter": "+1-617-495-1000",
    "David": "+1-949-468-2750"
}

name = get_string("Name: ")
if name in people:
    print(f"Number: {people[name]})
