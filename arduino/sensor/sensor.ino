// Sensor pins
#include <Adafruit_Sensor.h>
#include <Arduino.h>
#include <DHT_U.h>
#include <DHT.h>

#define sensorPower 7

#define DHTTYPE DHT22
#define adc_resolution 1024.0

#define waterlevel1 A0
#define dhtPin1 A1
#define ph1 A2
#define waterlevel2 A4
#define dhtPin2 A5
#define ph2 A6

DHT dht1(dhtPin1, DHTTYPE);
DHT dht2(dhtPin2, DHTTYPE);


void setup() {
	// Set D7 as an OUTPUT
	pinMode(sensorPower, OUTPUT);
	
	// Set to LOW so no power flows through the sensor
	digitalWrite(sensorPower, LOW);
  dht1.begin();
  dht2.begin();
	Serial.begin(9600);
}


// calculate ph value
float ph (float voltage){
  return 7 + ((2.5-voltage)/0.6);
}


// serial print sensor data
void print_value(float data){
  Serial.println(data);
}


void loop() {

  // turn on sensor
  digitalWrite(sensorPower, HIGH);
  delay(10);							// wait 10 milliseconds
	
  // print city code (0: Bengaluru)
  Serial.println(0);

  // get city's waterlevel
  //Serial.print("1-1: ");
  print_value(analogRead(waterlevel1));		// Read the analog value form sensor

  // get first city's temperature
  //Serial.print("1-2: ");
  print_value(dht1.readTemperature());

  // get first city's ph
  //Serial.print("1-3: ");
  print_value(ph(5.0/adc_resolution*analogRead(ph1) - 0.2));

  //get first city's turbidity
  //Serial.print("1-4: ");
  print_value(4);

  // measure sensor data per 5sec
  delay(2500);  


  // print city code (1: Delhi)
  Serial.println(1);
  // get second city's waterlevel
  print_value(analogRead(waterlevel2));		// Read the analog value form sensor

  // get second city's temperature
  //Serial.print("2-2: ");
  print_value(dht2.readTemperature());
  
  // get second city's ph
  //Serial.print("2-3: ");
  Serial.println(7.10);

  //get second city's turbidity
  //Serial.print("2-4: ");
  print_value(5);

  //Serial.println("----------------------------");
    
  // turn off sensors poser
  digitalWrite(sensorPower, LOW);

  // measure sensor data per 5sec
  delay(2500);  
}