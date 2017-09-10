# Blink!

Affordable, accurate communication through blinking for people with conditions that don't let them otherwise. 

**Demo:** https://blink.now.sh

## Hardware Setup

You'll need an Arduino, 1 megaohm resistor, and some leads. Wire the resistor between 2 and three, and add the lead to the foil on the pin 3 end.

Mount the headset on a baseball cap so it is right next to your eyesocket. Make sure it isn't touching, only when you blink.

## Software Setup

1. Install the server dependencies: `cd backend`, `pip3 install -r requirements.txt`
2. Install the frontend dependencies: `cd frontend`, `npm i`

## Usage

1. Run the server: `cd backend`, `python3 server.py`
2. Run the frontend: `cd frontend`, `npm run dev`

## Sequences

Blink uses a slightly modified version of Morse code. All letters are the same, but to advance to the next word, wait around 2 seconds, and to add a space, do `....-`.

Special sequences:

- **To start running**: `..--`
- **To stop running**: `......`
- **Space**: `....-`
- **/**: `---...`
- **Backspace**: `.---.`

---

*Built in 36 hours for PennApps XVI. By @kusti8, @lachlanjc, @shamdasani, and @praveenravi77. MIT licensed.*
