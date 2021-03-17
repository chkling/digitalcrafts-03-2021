# 2
# Create a building class, building class will have height, capacity, sqft
#Ask the user to create a building, they will enter in height, capacity (people), sqft
# Create 5 instances of this building - program forces you to do it five times. while loop, counter
# print out the specs of the building every time a building is made
# print statement needs to be a method

class Building:
    def __init__(self, height, capacity, sqft):
        self.height = height
        self.capacity = capacity
        self.sqft = sqft

    def buildingMessage(self):
        message = print(f"Building is {self.height} feet tall, has a capacity of {self.capacity} people, and is {self.sqft} square feet.")
        return message


def createBuilding():   
    counter = 1 
    while counter < 6:
        newHeight = input("What is the height of the building in feet?")
        newCapacity = input("What is the capacity of the building?")
        newSqft = input("What is the square footage of the building?")
        newBuilding = Building(newHeight, newCapacity, newSqft)
        newBuilding.buildingMessage()
        counter += 1

createBuilding()