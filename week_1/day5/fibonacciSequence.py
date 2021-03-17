# 3. Fibonacci Sequence
# Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
# 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

firstNumber, secondNumber = 0, 1
count = 0
total = 0

while count < 400:
    sum = firstNumber + secondNumber    
    firstNumber = secondNumber
    secondNumber = sum
    if sum % 2 == 0:
        total += sum
        count += 1
    else:
        count += 1

print(total)
    


    # if(num % 2 == 0):
    #     num += count
    #     count = num
    # else:
    #     num += 2
        

# print(count)
