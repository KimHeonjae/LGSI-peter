// Sensor pins
#include <Adafruit_Sensor.h>
#include <DHT_U.h>
#include <DHT.h>

#define sensorPower 7
#define sensorPin1 A0

#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

// Value for storing water level
int val = 0;

void setup() {
	// Set D7 as an OUTPUT
	pinMode(sensorPower, OUTPUT);
	
	// Set to LOW so no power flows through the sensor
	digitalWrite(sensorPower, LOW);
	
	Serial.begin(9600);
  dht.begin();
}

void loop() {

  // water level
  int waterlevel = readSensor();
  Serial.println(waterlevel);

  //temperature
  float temperature = dht.readTemperature();
  Serial.println(temperature);

	delay(5000);
}

//This is a function used to get the reading
int readSensor() {
	digitalWrite(sensorPower, HIGH);	// Turn the sensor ON
	delay(10);							// wait 10 milliseconds
	val = analogRead(sensorPin1);		// Read the analog value form sensor
	digitalWrite(sensorPower, LOW);		// Turn the sensor OFF
	return val;							// send current reading
}