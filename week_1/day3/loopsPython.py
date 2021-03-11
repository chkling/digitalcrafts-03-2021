#first name of user
nameOfUser = input("What is your first name?")
lengthOfUserName = len(nameOfUser)

while(lengthOfUserName < 1):
    nameOfUser = input("What is your first name?")
    lengthOfUserName = len(nameOfUser)

#last name of user
lastNameOfUser = input("What is your last name?")
lengthOfUserLastName = len(lastNameOfUser)

while(lengthOfUserLastName < 1):
    lastNameOfUser = input("What is your first name?")
    lengthOfUserLastName = len(lastNameOfUser)

#first name of friend
nameOfFriend = input("What is your friend's first name?")
lengthOfFriendName = len(nameOfFriend)

while(lengthOfFriendName < 1):
    nameOfFriend = input("What is your friend's first name?")
    lengthOfFriendName = len(nameOfFriend)

#last name of friend  
lastNameOfFriend = input("What is your friend's last name?")
lengthOfFriendLastName = len(lastNameOfFriend)

while(lengthOfFriendLastName < 1):
    lastNameOfFriend = input("What is your friend's last name?")
    lengthOfFriendLastName = len(lastNameOfFriend)

#output
print("%s %s is friends with %s %s." % (nameOfUser, lastNameOfUser, nameOfFriend, lastNameOfFriend))
