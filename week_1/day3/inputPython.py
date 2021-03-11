#Take user first name
nameOfUser = input("What is your first name?")
#Store user first name into a value we can use
lengthOfUserName = len(nameOfUser)

while(lengthOfUserName < 1):
    nameOfUser = input("What is your first name?")
    lengthOfUserName = len(nameOfUser)


#Take user last name
lastNameOfUser = input("What is your last name?")
#Store user last name into a value we can use
lengthOfUserLastName = len(lastNameOfUser)

while(lengthOfUserLastName < 1):
    lastNameOfUser = input("What is your first name?")
    lengthOfUserLastName = len(lastNameOfUser)

# if lengthOfUserName > 0: 
#     nameOfFriend = input("What is your friend's name?")
#     print("Your friend's name is", nameOfFriend)
# else:
#     print("Invalid name. Please enter at least one letter.")


print("This is the length of the user first name:", lengthOfUserName)
print("This is the length of the user last name:", lengthOfUserLastName)
print("The user name is %s %s." % (nameOfUser, lastNameOfUser))

