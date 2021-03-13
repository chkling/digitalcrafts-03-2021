# 10,001st Prime Number
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
# What is the 10,001st prime number?

primes = []
num = 2
digit = 2
while num < 10:
    while digit < 10:
        if(num / digit != num):
            digit += 1
        else:
            primes.append(num)
            num += 1
    

print(primes[2])