#List
pets = ["cat", "dog", "bunny"]

#Access the list
dog = pets[1]

#Negative index to access the end of the list
rabbit = pets[-1]

#Multiple values - including first number and excluding last
favoriteAnimals = pets[0:2]

#if you start your index range with a negative, it starts from the end of the list 
#and goes back however many times you want depending on the second number
demonSpawns = pets[-2:-1]

#Prints
# print(dog)
# print(rabbit)
# print(favoriteAnimals)
print(demonSpawns)

pets.append("kitty")
print(pets)