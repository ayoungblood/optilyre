/* Arduino client for optilyre. 2012 May 03 Akira Youngblood
 * Check analog pins, when value is greater than threshold,
 * trigger and inform Processing sketch via serial.
 * The threshold must be able to be set via the Processing sketch.
 * Note that it takes 100 microseconds to read an ADC, or so I heard.
 */

int threshold = 512;
int inputs[] = {A0,A1,A2,A3,A4,A5,A6};

void setup() {
  Serial.begin(9600); // the bitrate must match the Processing sketch.
  
}
void loop() {
  for (int i=0; i<6; i++) {
    if (analogRead(inputs[i]) > threshold) {
      Serial.print(i);
      Serial.print(" >> ");
      Serial.println(analogRead(inputs[i]));
      
    }
  }
  delay(300);
}
