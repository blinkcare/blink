import serial
import time

ser = serial.Serial('/dev/ttyACM0', 9600)

threshold = 1800

short_press = 300
long_press = 700

def s():
    print("Short")

def l():
    print("Long")

def get_value():
    v = ser.readline().strip()
    if v.isdigit():
        return int(v)
    else:
        return 0

while True:
    value = get_value()
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
