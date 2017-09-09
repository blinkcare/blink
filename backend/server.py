import serial
import time
#from flask import Flask

#app = Flask(__name__)
ser = serial.Serial('/dev/ttyACM0', 9600)

morseAlphabet ={
        "A" : ".-",
        "B" : "-...",
        "C" : "-.-.",
        "D" : "-..",
        "E" : ".",
        "F" : "..-.",
        "G" : "--.",
        "H" : "....",
        "I" : "..",
        "J" : ".---",
        "K" : "-.-",
        "L" : ".-..",
        "M" : "--",
        "N" : "-.",
        "O" : "---",
        "P" : ".--.",
        "Q" : "--.-",
        "R" : ".-.",
        "S" : "...",
        "T" : "-",
        "U" : "..-",
        "V" : "...-",
        "W" : ".--",
        "X" : "-..-",
        "Y" : "-.--",
        "Z" : "--.."
        }

morseAlphabet=dict((v,k) for (k,v) in morseAlphabet.items())

threshold = 1800

short_press = 300
long_press = 700
new_char = 1000
new_word = 3000

queue = ""
characters = ""

started = False

def s():
    global queue
    queue += "."

def l():
    global queue
    queue += "-"

def get_value():
    v = ser.readline().strip()
    if v.isdigit():
        return int(v)
    else:
        return 0

while True:
    if '........' in queue:
        queue = queue.split('........')[1]
        started = True
    elif '......' in queue:
        started = False
        queue = queue.split('......')[1]
    value = get_value()
    print(queue)
    millis = int(round(time.time() * 1000))
    while value < threshold:
        value = get_value()
    change = int(round(time.time() * 1000)) - millis
    if new_char < change < new_word:
        try:
            characters += morseAlphabet[queue]
            print(characters)
            queue = ""
        except:
            queue = ""
    elif change > new_word:
        try:
            characters += morseAlphabet[queue]
            print(characters)
            queue = ""
        except:
            queue = ""
        characters += " "
        print(characters)
    if value > threshold:
        millis = int(round(time.time() * 1000))
        while value > threshold:
            value = get_value()
        change = int(round(time.time() * 1000)) - millis
        print("Change:", change)
        if short_press < change < long_press:
            s()
        elif change > long_press:
            l()

#@app.route('/data')