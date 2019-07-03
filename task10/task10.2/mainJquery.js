;
(function () {
    let lat,
        long,
        flag = false,
        parent = $("#weather"),
        elem = $(".weatherData"),
        clone = elem.clone();

    $("#button").click(function () {

        lat = $("#pac-input").attr('data-lat');
        long = $("#pac-input").attr('data-long');

        if (flag) $('#weather').children().slice(2).remove();

        if (!lat) {
            lat = "47.2416334";
            long = "38.86760129999993";
        }

        $.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=eef6dc015e2a6bb471a917b31186f693", function (response) {
          
           $('#city').html(response.city.name);

           $.each(response.list, function (k, v) {

                flag = true;

                let localData = new Date(v.dt_txt).toLocaleString('ru', {
                    day: 'numeric',
                    month: 'long',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                });

                let temperatura = (v.main.temp - 273.15).toFixed(1) + "  &#8451";
                let iconID = "<img src='http://openweathermap.org/img/wn/" + v.weather[0].icon + "@2x.png'>";

                clone = elem.clone();
                clone.removeClass("hide");
                parent.append(clone);

                $("[data-time]:last").html(localData);
                $("[data-temp]:last").html(temperatura);
                $("[data-icon]:last").html(iconID);



            });
            
        });
    });


    google.maps.event.addDomListener(window, 'load', function () {
        let d = document,
            input = d.querySelector("#pac-input"),
            autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.addListener('place_changed', function () {
            let place = autocomplete.getPlace();

            $("#pac-input").attr('data-lat', place.geometry.location.lat());
            $("#pac-input").attr('data-long', place.geometry.location.lng());
        });
    });

})();