# Implements linear search for names using loop

# A list of names
names = ["Carter", "David", "John"]

# Ask for name
name = input("Name: ")

# Search for name linearly
for n in names:
    if name == n:
        print("Found")
        break
else:
    print("Not found")

# Search for name directly
if name in names:
    print("Found")
else:
    print("Not found")
