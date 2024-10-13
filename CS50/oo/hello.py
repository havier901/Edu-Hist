# An object-oriented Hello World
class Hello:
    # default attributes
    greeting = "Hello" 
    subject = "World" #Encapsulation: Encapsulated attributes inside our class

    # Methods: functions inside a class
    def __init__(self, greeting=None, subject=None): # Constructor method (looks funny in python)
        # Conditionally set the object's attributes if
        # they were passed into the constructor
        if greeting is not None:
            self.greeting = greeting
        if subject is not None:
            self.subject = subject

    def say(self): #self parameters are required in python (specifically)
        print(f"{self.greeting} {self.subject}") #Data + Behavior

    def goodbye(self):
        print(f"Goodbye {self.subject}")

class UpperMixin:
    #Override the say method
    def say(self):
        a = self.greeting.upper()
        b = self.subject.upper()
        print(f"{a} {b}")

#Inheritance
# Bonjour is a subclass of Hello
class Bonjour(Hello): # Hello is the Parent class
    greeting = "Bonjour"
    subject = "Le Monde" # override the parent class attributes

    # override the goodby method to customize its behavior
    def goodbye(self):
        print(f"tout a l'heure")

class ExcitedHello(UpperMixin, Hello):
    pass

if __name__ == "__main__":
    #Let's use our Hello class
    hi = Hello() # instantiate-create an object or an instance of the class
    hi.say()
    hi.goodbye()

    bon = Bonjour()
    bon.say()
    bon.goodbye()

    yo = Hello("Yo", "Dawg") #Abstraction
    yo.say()
    yo.goodbye()

    x = ExcitedHello()
    x.say()
