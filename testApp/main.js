window.onload = function() {
    
   display_log("1");
    // 파일 경로 설정
    const fs = require('fs');

    const filePath = '/home/root/result.txt';

    display_log("2");
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            display_log('파일을 읽는 동안 오류가 발생했습니다:', err);
            return;
        }
        display_log("3");
        display_log('파일 내용:', data);
    });
    display_log("4");

    // let bridge = new WebOSServiceBridge();

    // const peripheralURI = 'luna://com.webos.service.peripheralmanager';
    // const gpio_open ="/gpio/open";
    // const gpio_close = "/gpio/close";
    // const gpio_getValue = "/gpio/getValue";
    // const gpio_pNum = "gpio18"; 

    // bridge.onservicecallback = init_state;
    // bridge.call(peripheralURI+gpio_open, '{"pin":"' +gpio_pNum+ '"}');
    // bridge.call(peripheralURI+gpio_getValue, '{"pin":"' +gpio_pNum+ '"}');

    // function init_state (msg){
    //     let arg = JSON.parse(msg);
    //     if (arg.returnValue) {
    //         display_log("connected")
    //         if (arg.value == "low") {
    //             display_log("low")
    //         } else {
    //             display_log("high")
    //         }                
    //     } else {
    //         display_log("not connected")
    //         display_log(arg.errorText)
    //     }
    // }
    function display_log(msg) {
        let responseWindow = document.getElementById('response-window');
        responseWindow.innerHTML = msg + '<br>' + responseWindow.innerHTML;
    }
}