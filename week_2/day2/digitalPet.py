petSpider = {
    "name": "Peter",
    "strength": 20,
    "defense": 10,
    "hp": 100
}

# fed the spider
def feedPeter():
    petSpider["strength"] += 5
    petSpider["hp"] += 5

def playWithPeter():
    petSpider["defense"] += 5

def howIsPeterDoing():
    print(petSpider)

def welcomeMessage():
    message = int(input("""
    Please choose from the following:
    1. Feed Peter
    2. Play with Peter (he gets angry)
    3. Check on Peter
    4. Stare
    """))

    return message

while True:
    choice = welcomeMessage()
    if choice == 1:
        feedPeter()
    elif choice == 2:
        playWithPeter()
    elif choice == 3:
        howIsPeterDoing()
    # elif choice == 4:
    # else:

# print(petSpider)
# feedPeter()
# print(petSpider)

# spider fought other spiders