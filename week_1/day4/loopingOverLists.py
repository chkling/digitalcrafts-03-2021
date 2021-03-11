
pets = ["cat", "dog", "bunny", "toucan", "hamster"]
otherPets = ["mouse", "raccoon", "owl"]

# you can use len to find the length of a list
# print(len(pets))

# Looping over a list
# index = 0
# while index < len(pets):
#     pet = pets[index]
#     print("I want to buy the %s." % pet)
#     index += 1


#For loop - singular (pet) with the plural (pets)
count = 1
for pet in otherPets:
    print(pet)
    print(count)
    count += 1