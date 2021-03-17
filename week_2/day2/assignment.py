# 1
# Create a User class, that has the  ability to print the users name
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name.
# Create a function that asks you to give the user a name, and give the user an age, and will then create the user for you, and print it to the screen. The user will have a choice to either be a temp user or a User

class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class TempUser:
    def __init__(self, name):
        self.name = name

def typeOfUser():
    newUser = ""    
    userType = input("Are you a (m) main or (t) temp user?")
    if userType == "m": 
        userName = input("What is your name?")
        userAge = input("What is your age?")       
        newUser = User(userName, userAge)
        print(f"{newUser.name} is {newUser.age} years old and is the main user.")
        # print("%s is %s years old and is the main user." % (newUser.name, newUser.age))
    elif userType == "t":
        userName = input("What is your name?")
        newUser = TempUser(userName)
        print(f"{newUser.name} the temporary user.")
    else:
        print("Please try again.")
    return newUser

calvin = typeOfUser()
joe = typeOfUser()



