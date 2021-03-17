class Currency:
    def __init__(self, name, nation, price, quantity):
        self.name = name
        self.nation = nation
        self.price = price 
        self.quantity = quantity
    
    def printCurrency(self):
        print(f"""
            NATION: {self.nation}\n
            NAME: {self.name}\n
            PRICE: {self.price}\n
            QUANTITY: {self.quantity}\n
            """)

    def addQuantity(self, amount):
        self.quantity += amount
        # quantityTotal = self.quantity + amount
        # self.quantity = quantityTotal
        # return quantityTotal

class CryptoCurrency(Currency):
# This is how to inherit from the parent class and redefine
    def __init__(self, name, nation, price, quantity, volatility):
        # super().__init__(name, nation, price, quantity)
        self.name = name
        self.nation = nation
        self.price = price 
        self.quantity = quantity
        self.volatility = volatility

    def go_to_the_moon(self):
        self.price = self.price * 1000
        print(self.price)

    def printCurrency(self):
        print(f"""
            DOGGIE\n
            NATION: {self.nation}\n
            NAME: {self.name}\n
            PRICE: {self.price}\n
            QUANTITY: {self.quantity}\n
            VOLATILITY: {self.volatility}\n
            """)

class ScamCurrency(CryptoCurrency):
    def sendPersonalData(self):
        print("You got scammed!")

doge = CryptoCurrency("DogeCoin", "Doge Nation", 5, 10000, "very")
xvg = ScamCurrency("XVG", "Super Secure Money", 1, 10, "definitely bad")


yen = Currency("Yen", "Japan", 200, 10)
usDollar = Currency("Dollar", "US", 1, 10)
swedishKrona = Currency("Krona", "Sweden", 20, 10)

# print(yen.quantity)
# yen.addQuantity(5)
# print(yen.quantity)

# doge.printCurrency()
# doge.go_to_the_moon()
# doge.printCurrency()

xvg.printCurrency()
xvg.go_to_the_moon()
xvg.printCurrency()
doge.printCurrency()
xvg.sendPersonalData()
