from urllib.request import urlopen
import re

url = 'https://www.sap.com/belgique/index.html';
regex = r'sap'
subst = 'Odoo'

with  open(r'manipulated-file.htm', 'w') as manipulatedFile, urlopen(url) as con:
    # read the file line by line, do the "manipulation" then write in the file
    for line in con.readlines():
        # the line comes as a binary so we need to decode it first 
        # the encoding method the link uses is utf8
        decodedLine = line.decode('utf8')
        # using Regex to replace sap by Odoo
        manipulatedLine = re.sub(regex, subst, decodedLine, flags=re.IGNORECASE)
        manipulatedFile.write(manipulatedLine)

print('Everything is done!');
