import serial
import time
from flask import Flask, render_template
from flask_cors import CORS
from threading import Thread
from gtts import gTTS

app = Flask(__name__)
CORS(app)


characters = ""
started = False

@app.route('/data')
def data():
    global characters
    return render_template("data.html", characters=characters)

@app.route('/status')
def status():
    global started
    status = ""
    if started:
        status += "True"
    else:
        status += "False"

    return render_template("status.html", status=status)

@app.route('/queue')
def queue_set():
    global queue
    return render_template("queue.html", queue=queue)
#@app.route('/mp3')
#def mp3():



@app.route('/')
def index():
    return render_template("index.html")

p = Thread(target=app.run)
p.start()


################################################################


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
        "Z" : "--..",
        " " : "....-"
        }

morseAlphabet=dict((v,k) for (k,v) in morseAlphabet.items())

threshold = 1800

short_press = 100
long_press = 500
new_char = 1000
new_word = 3000
reset = 6000

queue = ""

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
    if '..--' in queue:
        queue = ""
        started = True
    elif '......' in queue:
        started = False
        queue = ""
    value = get_value()
    print(started)
    print(queue)
    millis = int(round(time.time() * 1000))
    while value < threshold:
        value = get_value()
        change = int(round(time.time() * 1000)) - millis
        if new_char < change:
            break
    if new_char < change:
        if started == True:
            try:
                characters += morseAlphabet[queue]
                queue = ""
            except:
                queue = ""
    # elif change > new_word:
    #     if started == True:
    #         try:
    #             characters += morseAlphabet[queue]
    #             print(characters)
    #             queue = ""
    #         except:
    #             queue = ""
    #         characters += " "
    #         print(characters)
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
        elif change > reset:
            characters = ""
            queue = ""
            started = False