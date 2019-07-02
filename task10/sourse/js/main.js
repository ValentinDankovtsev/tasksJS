
    
;
(function () {

    let d = document,
        w = window;

    let lat;
    let long;
    let arrJSON = [];
    let flag = false;

    let parent = d.querySelector("#weather");

    const loadWeather = (lat, lon) => {

        if (flag) {

            while (parent.children.length > 2) {
                parent.removeChild(parent.lastChild);
            }
            arrJSON = [];
        }

        if (!lat) {
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

                JSON.parse(xhr.responseText, function (k, v) {
                 
                    
                    switch (k) {

                        case 'dt_txt':
                        case 'temp':
                        case 'icon':
                                arrJSON.push(v); 
                             break;
                        default:
                        break;
                    }
                
                    if (arrJSON.length == 3) {
                        pushHtml.apply(this, arrJSON);
                        arrJSON.length = 0;
                    }

                });
            }
        };

        xhr.send();
       
    };

    const pushHtml = (t, icon, dt) => {
        if (arrJSON.length == 0) {
            return;
        }


        let elem1 = d.querySelector('*[data-time]'),
            elem2 = d.querySelector('*[data-temp]'),
            elem3 = d.querySelector('*[data-icon]');


        elem1.innerHTML = new Date(dt).toLocaleString('ru', {
            day: 'numeric',
            month: 'long',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });

        let Cels = t - 273.15
        elem2.innerHTML = Cels.toFixed(1) + "  &#8451";

        elem3.innerHTML = "<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png'>";


        let parent = d.querySelector("#weather");
        let elem = parent.querySelector(".weatherData");
        let clone = elem.cloneNode(true);

        parent.appendChild(clone);
        parent.lastChild.classList.remove('hide');


        if (parent.children.length > 2) flag = true;


    }


    const delegater = (e) => {
        let target = e.target;


        if (target.hasAttribute('data-push')) {

            lat = d.querySelector("#pac-input").dataset.lat;
            long = d.querySelector("#pac-input").dataset.long;

            loadWeather(lat, long);

        }

    };


    d.querySelector('#button').addEventListener('click', delegater);

    google.maps.event.addDomListener(window, 'load', function () {
        let d = document;

        let input;

        input = d.querySelector("#pac-input");
        let autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.addListener('place_changed', function () {
            let place = autocomplete.getPlace();

            d.querySelector("#pac-input").dataset.lat = place.geometry.location.lat()
            d.querySelector("#pac-input").dataset.long = place.geometry.location.lng()
        });
        

   });

   



})();













