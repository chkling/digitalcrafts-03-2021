firstNumber = int(input("Please enter a number"))
operand = input("Please enter a +, -, * or /")
secondNumber = int(input("Please enter a second number"))

if(operand == "*"):
    total = firstNumber * secondNumber
    print("The result is %s." % (total))

if(operand == "/"):
    total = (firstNumber / secondNumber)
    print("The result is %s." % (total))

if(operand == "+"):
    total = (firstNumber + secondNumber)
    print("The result is %s." % (total))

if(operand == "-"):
    total = (firstNumber - secondNumber)
    print("The result is %s." % (total))