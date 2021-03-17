class Currency:
    def __init__(self, name, homeNationCurrency, price):
        self.name = name
        self.homeNationCurrency = homeNationCurrency
        self.price = price 

yen = Currency("Yen", "Japan", 200)
print(yen.name, yen.homeNationCurrency, yen.price)