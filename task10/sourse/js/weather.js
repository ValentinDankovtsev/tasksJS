;
(function (){
    let d = document,
        w = window;

        const loadWeather = () => {
            let xhr = new XMLHttpRequest();
            let arr = [];
            xhr.open("GET",
                "https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=eef6dc015e2a6bb471a917b31186f693"
            );

            xhr.send();

            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;
                if (xhr.status != 200) {
                    console.log(xhr.status + ": " + xhr.statusText);
                } else {
                    JSON.parse(xhr.responseText, function (k, v) {
                        if (k == "temp") {
                            debugger;
                            arr.push(v);
                        }
                    })
                }
            };


            return function () {
                console.log(arr);
            }

        }
        loadWeather();
    
    

    w.addEventListener( "load", loadWeather());











})();