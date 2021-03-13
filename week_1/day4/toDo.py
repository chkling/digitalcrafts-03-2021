toDo = []
choice = ""

# Welcome function
def welcomeMessage():
    message = """
    Welcome to your TO DO list!
    Press 1 to add task 
    Press 2 to delete task
    Press 3 to view all tasks
    Press q to quit\n
    """
    return print(message)

# Add task function
def addTask():
    toDoDictionary = {}
    taskToAdd = input("What should be added?\n")
    priorityOfTask = input("Is this of high, medium or low importance?\n")

    toDoDictionary["title"] = taskToAdd
    toDoDictionary["priority"] = priorityOfTask
    toDo.append(toDoDictionary)
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
    taskToDelete = int(input("Which task should be removed?\n"))
    # toDo.pop(taskToDelete - 1)
    taskToDeleteIndex = taskToDelete - 1
    gettingDeleted = toDo[taskToDeleteIndex]
    del toDo[taskToDeleteIndex]

    option = input("We have removed %s. Remove another task? (y for yes or n for no)\n" % gettingDeleted)
    if(option == "y"):
        removeTask()
    elif(option == "n"):
        mainMenu()
    else:
        option = input("Remove another task? (y for yes or n for no)\n")

# View to do list
def viewTasks():
    for task in toDo:
        print(task)
        # print(toDo[task] + " - " + toDo[title] + " - " + toDo[priority])
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
        elif(selection == "2"):
            removeTask()
        elif(selection == "3"):
            viewTasks()
        elif(selection == "q"):
            exit()
        else:
            welcomeMessage()
            selection = input("What would you like to do? \n")

mainMenu()









# quit?