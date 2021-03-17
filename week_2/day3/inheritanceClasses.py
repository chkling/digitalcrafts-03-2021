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
    def go_to_the_moon(self):
        self.price = self.price * 1000

    def printCurrency(self):
        print(f"""
            DOGGIE\n
            NATION: {self.nation}\n
            NAME: {self.name}\n
            PRICE: {self.price}\n
            QUANTITY: {self.quantity}\n
            """)

class ScamCurrency(CryptoCurrency):
    def sendPersonalData(self):
        print("You got scammed!")

doge = CryptoCurrency("DogeCoin", "Doge Nation", 5, 10000)
xvg = ScamCurrency("XVG", "Super Secure Money", 1, 10)


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
xvg.sendPersonalData()
usDollar.printCurrency()
