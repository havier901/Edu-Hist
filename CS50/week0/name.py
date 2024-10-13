welcome = ["Trey", "Jessica", "Havi"]

#validate function returns true if
#name is in welcome list
# OR
# first letter of name is 'A'
# OR
# third letter of name is 'y'
def validate(name):
    answer = False
    if(name in welcome or name[0] == 'A' or name[2] == 'y'): #This is an "if or" statement
        answer = True


    return answer

if __name__ == "__main__": #double underscore is called a dunder, name function is built in to refer to file
    print("What is your name?")
    name = ""
    while(len(name) == 0):
        name = input()
    if validate(name):
        print(f"Welcome, {name}!")
    else:
        print("You are not welcome here...")