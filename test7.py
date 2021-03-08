
# if data.bin is huge that memory can't afford it 
# then maybe it's better to create a temp file to hold the data until truncating is done
# instead of storing the data in a var or something (memory)
# then after that remove data.bin file and rename the temp file to data.bin

import os

with open("data.bin", "rb") as original, open("temp.bin", 'wb') as temp:
    sixBytes = original.read(6)

    while sixBytes:
        temp.write(sixBytes)
        print('7th: ', original.read(1))
        sixBytes = original.read(6)
    
os.remove('data.bin')
os.rename('temp.bin', 'data.bin')
