toDo = []
choice = ""

# Welcome function
def welcomeMessage():
    message = """
    Welcome to your TO DO list!\n
    Press 1 to add task \n
    Press 2 to delete task\n
    Press 3 to view all tasks\n
    Press q to quit\n
    """
    return print(message)

# Add task function
def addTask():
    title = input("What should be added?\n")
    priority = input("Is this of high or low importance?\n")
    toDo.append({title: priority})
    print("Added item to list.\n")
    option = input("Add another task? (y for yes or n for no)\n")
    if(option == "y"):
        addTask()
    elif(option == "n"):
        mainMenu()
    else:
        option = input("Add another task? (y for yes or n for no)\n")

# Remove task function
def removeTask():
    print(toDo)
    index = input("Which task should be removed?\n")
    del toDo[index]
    option = input("Remove another task? (y for yes or n for no)\n")
    if(option == "y"):
        removeTask()
    elif(option == "n"):
        mainMenu()
    else:
        option = input("Remove another task? (y for yes or n for no)\n")

# View to do list
def viewTasks():
    print(toDo)
    option = input("Go back to main menu? (y for yes or n to exit the program.)\n")
    if(option == "y"):
        mainMenu()
    elif(option == "n"):
        exit()
    else:
        option = input("Go back to main menu? (y for yes or n to exit the program.)\n")


# Options and execution
def mainMenu():
    while(choice != "q"):
        welcomeMessage()
        selection = input("What would you like to do? \n")
        if(selection == "1"):
            addTask()
        if(selection == "2"):
            removeTask()
        if(selection == "3"):
            viewTasks()
        if(selection == "q"):
            exit()

mainMenu()









# quit?