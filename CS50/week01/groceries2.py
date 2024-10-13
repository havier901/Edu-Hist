GROCERIES = []

def menu():
    print("""
------------------
1. Add an item to the list.
2. Show the list.
3. Remove an item.
4.Quit.)
---------------------
          """)
    return input("Enter your choice: ")

def add_item(item):
    GROCERIES.append(item)

def remove_item(item):
    GROCERIES.remove(item)

def show_list():
    for item in GROCERIES:
        print(f"- {item}")


if __name__ == "__main__": # "main program"

    option = menu()
    while option != "4":
        if option == "1":
            item = input("Enter your item: ")
            add_item(item)
        elif option == "2":
            show_list()
        elif option == "3":
            item = input("Which item to remove: ")
            remove_item(item)
        option = menu()
