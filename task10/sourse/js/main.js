;
(function () {

    let d = document,
        w = window;

    let lat;
    let long;
    let arrJSON = [];
    let arr = [];
    
    const loadWeather = (lat, lon) => {

        if (lat.length == 0 || !lat) {
            lat = "47.2416334";
            lon = "38.86760129999993";
        }
        let xhr = new XMLHttpRequest();

        xhr.open("GET",
            "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=eef6dc015e2a6bb471a917b31186f693"
        );



        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                console.log(xhr.status + ": " + xhr.statusText);
            } else {
                arrJSON.push(JSON.parse(xhr.responseText));
            }
        };

        xhr.send();

        console.log(arrJSON);

        history();
    };




    const history = () => {
        //  debugger;
        let itemTime = null;
        let len = 40;


        for (let i = 0; i < len; i++) {
            itemTime = {};
            for (let key in arrJSON) {
                itemTime.day = new Date(arrJSON[0].list[i].dt_txt);
                itemTime.temp = arrJSON[0].list[i].main.temp;
                itemTime.icon = arrJSON[0].list[i].weather[0].icon;
                arr.push(itemTime);
            }


        }
        return pushHtml();
    };


    function pushHtml() {
        let len = arr.length;
        let elem1 = d.querySelector('*[data-time]'),
            elem2 = d.querySelector('*[data-temp]'),
            elem3 = d.querySelector('*[data-icon]');


        for (let i = 0; i < len; i++) {
            debugger;



            elem1.innerHTML = arr[i].day.toLocaleString('ru', {
                day: 'numeric',
                month: 'long'
            });
            elem2.innerHTML = Math.floor(arr[i].temp - 273, 15) + "&#8451";
            elem3.innerHTML = "<img src='http://openweathermap.org/img/wn/" + arr[i].icon + "@2x.png'>";


            let createElement = d.querySelector(".first");
            let elemCLone = createElement.querySelector(".hours");
            let clone = elemCLone.cloneNode(true);
            // list.insertBefore(clone);
            createElement.appendChild(clone);
            createElement.lastChild.classList.remove('hide');
        }



    }







    const delegater = (e) => {
        let target = e.target;


        if (target.hasAttribute('data-push')) {

            lat = d.querySelector("#pac-input").dataset.lat;
            long = d.querySelector("#pac-input").dataset.long;

            loadWeather(lat, long);

        }

    };

    loadWeather();


    d.querySelector('#button').addEventListener('click', delegater);





})();