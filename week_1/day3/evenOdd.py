x = input("Please provide a number: ")
xLength = len(x)

while(xLength < 1):
    x = input("Please provide a number: ")
    xLength = len(x)

if(int(x) % 2 == 0):
    print("This number is even!")

else:
    print("This number is odd!")