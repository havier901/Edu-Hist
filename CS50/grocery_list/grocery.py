import sys
#CLI application - command line interface
# - Menu: Let a user choose what to do.
#   - a list of options
#   - descriptions for each option
#   - a way for a user to select an option
# - A place to store our list of groceries (data store)
# - A long-running application.

class Menu:
    # These are the menu options
    options = {}

    def add_option(self, key, description):
        self.options[key] = description

    def print(self):
        print("Menu: ")
        for key, desc in self.options.items():
            print(f"[{key}] {desc}")

    def prompt(self, message):
        while True:
            opt = input(message)
            if opt in self.options:
                return opt


class GroceriesApp:
    catalog = []
    menu = None

    def add(self, item): # proxy
        self.catalog.append(item)
        self.catalog = list(set(self.catalog)) #exploits the set type to make sure items appear only once
        self.catalog.sort()

    def remove(self, item):
        # Look before you leap method
        if item in self.catalog:
            self.catalog.remove(item)

        #It's better to ask forgiveness than permission method
        #try:
        #   self.catalog.remove(item)
        #   self.catalog.sort()
        #except ValueError:
            #pass

    def print(self):
        print("=" * 55)
        print("Your list: ", end="")
        print(", ".join(self.catalog))
        print("=" * 55)

    def make_menu(self):
        self.menu = Menu()
        self.menu.add_option("A", "Add an item to the list.")
        self.menu.add_option("B", "Remove an item from the list.")
        self.menu.add_option("C", "Print the list.")
        self.menu.add_option("D", "Exit the program.")

    def run(self):
        self.make_menu()
        while True:
            self.menu.print()
            selection = self.menu.prompt("Enter an option: ")
            if selection == "A":
                item = input("Item: ")
                self.add(item)
            elif selection == "B":
                item = input("What do you want to remove: ")
                self.remove(item)
            elif selection == "C":
                self.print()
            elif selection == "D":
                sys.exit("Goodbye.")



if __name__ == "__main__":
    #Run our Groceries App
    app = GroceriesApp()
    app.run()
