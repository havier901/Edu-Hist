# Implements a phone book as a list of dictionaries, without a variable

from cs50 import get_string

people = [
    {"name": "Carter", "number": "+1-617-495-1000"},
    {"name": "David", "number": "+1-617-495-1000"},
    {"name": "David", "number": "+1-949-468-2750"},
]

# Sear for name
name = get_string("Name: ")
for person in people:
    if person["name"] == name:
        print(f"Found {person['number']}")
        break
else:
    print("Not found")



# Or, alternatively

people = {
    "Carter": "+1-617-495-1000",
    "David": "+1-495-1000",
    "John": "+1-468-2750",
}

# Search for name
name = get_string("Name: ")
if name in people:
    print(f"Number: {people[name]}")
else:
    print("Not found")
