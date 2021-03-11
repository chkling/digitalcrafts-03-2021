#functions
def add(number1, number2):
    return number1 + number2

def subtract(number1, number2):
    return number1 - number2

def multiply(number1, number2):
    return number1 * number2

def divide(number1, number2):
    return number1 // number2

#first number
firstNumber = input("Please enter a number: ")
lengthFirstNumber = len(firstNumber)

while(lengthFirstNumber < 1):
    firstNumber = input("Please enter a number: ")
    lengthFirstNumber = len(firstNumber)

#operand
operand = input("Please enter a +, -, * or /: ")
lengthOperand = len(operand)

while(lengthOperand < 1):
    operand = input("Please enter a +, -, * or /: ")
    lengthOperand = len(operand)

#second number
secondNumber = input("Please enter a second number: ")
lengthSecondNumber = len(secondNumber)

while(lengthSecondNumber < 1):
    secondNumber = input("Please enter a second number: ")
    lengthSecondNumber = len(secondNumber)

#equation and output
if(operand == "*"):
    print(multiply(int(firstNumber), int(secondNumber)))

if(operand == "/"):
    print(divide(int(firstNumber), int(secondNumber)))

if(operand == "+"):
    print(add(int(firstNumber), int(secondNumber)))

if(operand == "-"):
    print(subtract(int(firstNumber), int(secondNumber)))