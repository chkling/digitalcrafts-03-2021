#list creation
numbers = []

#first number
firstNumber = input("Please enter a number: ")
lengthFirstNumber = len(firstNumber)
numbers.append(firstNumber)

if(firstNumber == "q"):
    exit()

while(lengthFirstNumber < 1):
    firstNumber = input("Please enter a number: ")
    lengthFirstNumber = len(firstNumber)
    numbers.append(firstNumber)

#operand
operand = input("Please enter a +, -, * or /: ")
lengthOperand = len(operand)
numbers.append(operand)

if(operand == "q"):
    exit()

while(lengthOperand < 1):
    operand = input("Please enter a +, -, * or /: ")
    lengthOperand = len(operand)
    numbers.append(operand)

#second number
secondNumber = input("Please enter a second number: ")
lengthSecondNumber = len(secondNumber)
numbers.append(secondNumber)

if(secondNumber == "q"):
    exit()

while(lengthSecondNumber < 1):
    secondNumber = input("Please enter a second number: ")
    lengthSecondNumber = len(secondNumber)
    numbers.append(secondNumber)

#functions
def add(number1, number2):
    return number1 + number2

def subtract(number1, number2):
    return number1 - number2

def multiply(number1, number2):
    return number1 * number2

def divide(number1, number2):
    return number1 // number2



#equation and output
# for number in numbers:

# if(operand == "*"):
#     print(multiply(int(firstNumber), int(secondNumber)))

# if(operand == "/"):
#     print(divide(int(firstNumber), int(secondNumber)))

# if(operand == "+"):
#     print(add(int(firstNumber), int(secondNumber)))

# if(operand == "-"):
#     print(subtract(int(firstNumber), int(secondNumber)))

print(numbers)

result = input("Press = for the result!")

if(numbers[1] == "*"):
    total = multiply(int(numbers[0]), int(numbers[2]))    

if(numbers[1] == "/"):
    total = divide(int(numbers[0]), int(numbers[2]))

if(numbers[1] == "+"):
    total = add(int(numbers[0]), int(numbers[2]))

if(numbers[1] == "-"):
    total = subtract(int(numbers[0]), int(numbers[2]))

while(result != "="):
    result = input("Press = for the result!")
    if(result == "="):
        print("Your total is %s." % total)