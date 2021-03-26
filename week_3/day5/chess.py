

def chessboard():  
    chess = ""
    i = 1
    row = 1
    while row <= 8:
        while i <= 8:
            if row % 2 == 0:
                if i % 2 == 0:
                    chess += " "
                    i += 1
                else: 
                    chess += "#"
                    i += 1
            else:
                if i % 2 == 0:
                    chess += "#"
                    i += 1
                else: 
                    chess += " "
                    i += 1
        row += 1
        return print("\n")
        

    return print(chess)

chessboard()