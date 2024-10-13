name = "Xavier"
#print(name)

#for i in range(0, len(name)): #SOLUTION 1
#  print(f"{name[i]} - {i}")

#for i, letter in enumerate(name): # un-packing
      #print(f"{i} {letter}")
      #print(i, letter)

"""count = 0 #using a while loop #SOLUTION 2
while count < len(name):
    print(f"Condition: {count} < {len(name)}")
    print(f"Output: {count} {name[count]}")
    count += 1
print("done.")
"""
for i, letter in enumerate(name): #SOLUTION 3
    print(f"{i} {letter}" )