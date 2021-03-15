# add your info
digitalCraftsStudent = {
    "name": "Calvin",
    "city": "Atlanta",
    "computer": ["Mac"],

}
# print out your computer information in the terminal
# print(digitalCraftsStudent["computer"])

gamer = {
    "platform": "PlayStation",
    "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
    "skill": "pwner"
}
# print preferred gaming hour
# print(gamer["gamingHours"][1]["weekends"])
# gamer["games"] = "Overwatch"
# print(gamer)


car = {
    "model": "HR-V",
    "image": "https://bit.ly/30NXFxS",
    "year": "2016",
    "engineChoices": [
        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],
}


# 1. print out a list of engine choices (the whole list)
engineList = []
for engine in car["engineChoices"]:
    engineList += engine.keys()
print(engineList)

# 2. print out the horsepower values only (all of them)
for engine in (car["engineChoices"]):
    for key, value in engine.items():
        print(value["horsepower"])

# 3. check to see if the value "trim" exist on the car dictionary
if car["engineChoices"] == "trim":
    print("There is trim.")
else:
    print("There is no trim.")
    

# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
car["colors"] = "red", "blue", "green", "yellow"

# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value



