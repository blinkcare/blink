import serial
import time

ser = serial.Serial('/dev/ttyACM0', 9600)

def get_value():
    v = ser.readline().strip()
    if v.isdigit():
        return int(v)
    else:
        return 0

while True:
	print(get_value())