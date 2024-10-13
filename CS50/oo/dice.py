from random import randint

#Abstract class
class BaseDie:
    sides = 6

    def __str__(self):
        return f"<d{self.sides}>" #e.g. : <d6>

    def roll(self):
        result = randint(1, self.sides)
        print(f"{self} rolled a {result}")
        return result

    def __add__(self, other): # Polymorphism
        print(f"Other is: {other}")
        if type(other) is int:
            return self.roll() + other
        #Assume: Both self & other are BaseDie subclasses
        return self.roll() + other.roll()

class Die(BaseDie):
    pass #A simple, 6-sided Die.

class D20(BaseDie):
    sides = 20

class D12(BaseDie):
    sides = 12


if __name__ == "__main__":

    d6 = Die()

    d12 = D12()

    d20 = D20()

    #dice = [d6, d12, d20]
    #sum = 0
    #for die in dice:
        #print(f"Rolling {die} -> ", die.roll())

    print(d6 + (d12 + d20)) #Not exactly right, but works
