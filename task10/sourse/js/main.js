;
(function () {

    let d = document,
        w = window;

    let lat;
    let long;
    let arrJSON = [];
    let arr = [];
    let flag = false;

    const loadWeather = (lat, lon) => {

        if (!lat || lat.length == 0) {
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
        return pushHtml()
    };


    function pushHtml() {
        let len = arr.length  ;
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

        
        flag = true;
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





})();





// function howMonth(fullDate) {
//     var A = showDateFullMonth(fullDate);
//     var s = new Date(A[0]);
//     var f = new Date(A[1]);

//     var Dd = Math.ceil(Math.abs(A[0].getTime() - A[1].getTime()) / (1000 * 3600 * 24)) + 1;
//     var O = " ";
//     var counter = 0;
//     for (var i = 0; i < Dd; i++) {
//         O += '' + new Date(s.getFullYear(), s.getMonth(), s.getDate() + i).getDate() + " ";
//         counter = 1 + i;
//         if (counter % 7 == 0 && counter > 0) {
//             O += '\n'
//         }



//     }

//     return console.log(O);
// }

// var myDate = '9/12/1988';

// howMonth('13/02/2019')
// 28 29 30 31 1 2 3
// 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17
// 18 19 20 21 22 23 24
// 25 26 27 28 1 2 3
// //////////////////////////////////////