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
    total = (int(firstNumber) * int(secondNumber))
    print("The result is %s." % (total))

if(operand == "/"):
    total = (int(firstNumber) / int(secondNumber))
    print("The result is %s." % (total))

if(operand == "+"):
    total = (int(firstNumber) + int(secondNumber))
    print("The result is %s." % (total))

if(operand == "-"):
    total = (int(firstNumber) - int(secondNumber))
    print("The result is %s." % (total))