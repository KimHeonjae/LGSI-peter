import requests
import serial
import time

# 스프링 부트 서버의 엔드포인트 URL
url = "http://192.168.201.4:8080/raspberry/save"

py_serial = serial.Serial(
    port='COM13',
    baudrate=9600
)


# read data from sensor
def get_data_from_sensor():
    if py_serial.readable():
        # serial read
        response = py_serial.readline()
        return response[:len(response) - 2].decode()


while True:
    for city in range(2):
        waterLevel = get_data_from_sensor()
        temperature = get_data_from_sensor()
        ph = get_data_from_sensor()
        turbidity = get_data_from_sensor()

        if city == 0:
            cityName = "Ulsan"
        else:
            cityName = "Busan"

        # make data
        data = {
            "cityName": cityName,
            "waterLevel": waterLevel,
            "temperature": temperature,
            "ph": 2,
            "turbidity": 3
        }
        print(data)

        # POST 요청 보내기
        response = requests.post(url, json=data)

        # 응답 확인
        if response.status_code == 200:
            print("request success")
            print("data:", response.json())
        else:
            print("error, status code:", response.status_code)

