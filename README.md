# Blink!

## Setup

Obtain and Arduino, a 1 megaohm resistor and some leads. Wire the resistor between 2 and three, and add the lead to the foil on the pin 3 end. Install dependencies as well: `pip3 install -r requirements.txt`

## Usage

Run the server by going to backend and running `python3 server.py`. The webpage can be run by running `npm i && npm run dev`. That's it! 

Mount the headset on a baseball cap so it is right next to your eyesocket. Make sure it isn't touching, only when you blink.

## The Sequences

It uses a slightly modified version of Morse code. All letters are the same, but to advance to the next word, wait around 2 seconds, and to add a space, do `....-`. 

**To start running**: `..--`
**To stop running**: `......`