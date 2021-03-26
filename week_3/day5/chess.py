

def chessboard():  
    chess = ""
    i = 0
    row = 0  
    if row < 8:
        if i < 8:
            if row % 2 == 0:
                if i % 2 == 0:
                    chess += " "
                    i += 1
                else: 
                    chess += "#"
                    i += 1
            if row % 2 != 0:
                if i % 2 == 0:
                    chess += "#"
                    i += 1
                else: 
                    chess += " "
                    i += 1
        else:
            print("\n")
            row += 1

    return print(chess)

chessboard()