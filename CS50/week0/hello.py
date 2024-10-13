print("Hello world")

name = "Brad"
age = 45
bucket = "methods"
bucket # There is NO output on the screen!
print(f"My name is {name}, I'm {age} years old, and my bucket is full of {bucket}")

groceries = ["eggs", "bread", "bacon"]
groceries = sorted(groceries) # lets sort our list
groceries = ", ".join(groceries) # creates a new stirng from items in the list
#print(f"Groceries: {", ".join(groceries)}")

if len(groceries) <= 5:
    print("you need more food!")
else:
    print("That's probably enough")
    