import serial
import time
import os
from flask import Flask, render_template, make_response, jsonify, send_from_directory
from flask_cors import CORS
import json
from threading import Thread
from gtts import gTTS

app = Flask(__name__)
CORS(app)

characters = ""
started = False


@app.route('/')
def js():
    global characters, started, queue
    status = started
    d = {"characters": characters, "status": status, "queue": queue}
    return jsonify(d)


@app.route('/mp3')
def mp3():
    if os.path.isfile("word.mp3"):
        return send_from_directory(".", "word.mp3")
    else:
        return ''


def mp3_transcribe():
    print("Transcribing")
    word = list(filter(None, characters.split(' ')))[-1]
    print(word)
    tts = gTTS(text=word, lang='en', slow=True)
    tts.save("word.mp3")


p = Thread(target=app.run, kwargs={"threaded": True})
p.start()

################################################################

ser = serial.Serial('/dev/ttyACM0', 9600)

morseAlphabet = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ": "....-",
    "/": "---...",
    "_": "...---"
}

morseAlphabet = dict((v, k) for (k, v) in morseAlphabet.items())

threshold = 200

short_press = 90
long_press = 350
new_char = 1200
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
        characters = ""
        started = True
    elif '......' in queue:
        started = False
        queue = ""
        characters = ""
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
                if characters[-1] == '_':
                    characters = characters[:-2]
                if characters[-1] == ' ':
                    mp3_transcribe()
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
        elif long_press < change < reset:
            l()
        elif change > reset:
            characters = ""
            queue = ""
