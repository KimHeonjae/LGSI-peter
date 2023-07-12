window.onload = function() {

    let bridge = new WebOSServiceBridge();

    const url = 'luna://com.test.app.service/getdata';
    const Params = '{}'

    bridge.onservicecallback = send_data;
    bridge.call(url, Params);

    function send_data (msg){
        let arg = JSON.parse(msg);
        if (arg.returnValue) {
            fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: json.stringify({
                    cityName: arg.cityName,
                    waterLevel: arg.waterLevel
                }),
            })
            .then((response) => {
                if(response.ok == true){
                    display_log("response success");
                    return response.json();
                }
                throw new Error('response error');
            })
            .catch((error) => display_log("connected but error"))
            // display_log("connected")
            // display_log(arg.cityName)
            // display_log(arg.waterLevel)
        } else {
            display_log("not connected")
            display_log(arg.errorText)
        }
    }
    function display_log(msg) {
        let responseWindow = document.getElementById('response-window');
        responseWindow.innerHTML = msg + '<br>' + responseWindow.innerHTML;
    }
}