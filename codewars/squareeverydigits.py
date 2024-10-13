def square_digits(num):
    # Your code here
    
    num = str(num)
    number_string = ""

    for digit in num:
        
        digit = int(digit) * int(digit)
        number_string += str(digit)

    return int(number_string)

'''
CODEWARS BEST SOLUTION

def square_digits(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)
'''