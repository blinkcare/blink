#include <CapacitiveSensor.h>

/*
 * CapitiveSense Library Demo Sketch
 * Paul Badger 2008
 * Uses a high value resistor e.g. 10M between send pin and receive pin
 * Resistor effects sensitivity, experiment with values, 50K - 50M. Larger resistor values yield larger sensor values.
 * Receive pin is the sensor pin - try different amounts of foil/metal on this pin
 */


CapacitiveSensor   cs_4_2 = CapacitiveSensor(2,3);        // 10M resistor between pins 4 & 2, pin 2 is sensor pin, add a wire and or foil if desired

int threshold = 1800;
int t;
int long_press = 1000;
int short_press = 500;
void setup()                    
{
     // turn off autocalibrate on channel 1 - just as an example
   Serial.begin(9600);
}

int read() {
    long total1 =  cs_4_2.capacitiveSensor(30);
    delay(100);
    return total1;
}

void loop()                    
{
  Serial.println(read());
}
