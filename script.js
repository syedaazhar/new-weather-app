
var mySwiper;
function showCitiesWeather() {
  let cityName=document.querySelector('.form-control').value;
  

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName ? cityName : "Karachi"}&appid=3890c8ecf66961bb6012c22cf547b58a&units=metric`,

    success: function (data) {
      console.log(data);
      let forcast1 = new Date(data.list[0].dt * 1000);
      let forcast2 = new Date(data.list[8].dt * 1000);
      let forcast3 = new Date(data.list[16].dt * 1000);
      let forcast4 = new Date(data.list[24].dt * 1000);
      let forcast5 = new Date(data.list[32].dt * 1000);
      // let forcast6 = new Date(data.list[0].dt * 1000);
      // let forcast7 = new Date(data.list[0].dt * 1000);

      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      document.querySelector(".card-day1").innerHTML = days[forcast1.getDay()];
      document.querySelector(".card-day2").innerHTML = days[forcast2.getDay()];
      document.querySelector(".card-day3").innerHTML = days[forcast3.getDay()];
      document.querySelector(".card-day4").innerHTML = days[forcast4.getDay()];
      document.querySelector(".card-day5").innerHTML = days[forcast5.getDay()];
      // document.querySelector(".card-day6").innerHTML = days[forcast6.getDay()];
      // document.querySelector(".card-day7").innerHTML = days[forcast7.getDay()];

      document.querySelector(".card-temp1").innerHTML = parseInt(data.list[0].main.temp) + " C°";
      document.querySelector(".card-temp2").innerHTML = parseInt(data.list[8].main.temp) + " C°";
      document.querySelector(".card-temp3").innerHTML = parseInt(data.list[16].main.temp) + " C°";
      document.querySelector(".card-temp4").innerHTML = parseInt(data.list[24].main.temp) + " C°";
      document.querySelector(".card-temp5").innerHTML = parseInt(data.list[32].main.temp) + " C°";

      // day1

      let forecasteIcon1 = data.list[0].weather[0].id;

      if (forecasteIcon1 == 800) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-day-sunny"></i>`
        console.log("1");
      }
      else if (forecasteIcon1 == 801) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        console.log("2");
      }
      // else if (forecasteIcon1 == "Partly Cloudy") {
      //   document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
      //   console.log("3");
      // }
      if (forecasteIcon1 == 802) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-cloud"></i>`
        console.log("4");
      }
      else if (forecasteIcon1 == 804 || forecasteIcon1 == 803) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-cloudy"></i>`
        console.log("5");
      }
      else if (forecasteIcon1 == 521) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-showers"></i>`
        console.log("6");
      }


      else if (forecasteIcon1 == 531 || forecasteIcon1 == 522 || forecasteIcon1 == 520) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-hail"></i>`
        console.log("3");
      }
      else if (forecasteIcon1 == 200 || forecasteIcon1 == 201 || forecasteIcon1 == 202
        || forecasteIcon1 == 210 || forecasteIcon1 == 211 || forecasteIcon1 == 212
        || forecasteIcon1 == 221 || forecasteIcon1 == 230 || forecasteIcon1 == 231 || forecasteIcon1 == 232) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-thunderstorm"></i>`
        console.log("8");
      }
      else if (forecasteIcon1 == 500 || forecasteIcon1 == 501 || forecasteIcon1 == 502
        || forecasteIcon1 == 503 || forecasteIcon1 == 504 || forecasteIcon1 == 511
        || forecasteIcon1 == 520 || forecasteIcon1 == 521 || forecasteIcon1 == 522 || forecasteIcon1 == 531) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-rain"></i>`
        console.log("8");
      }
      else if (forecasteIcon1 == 600 || forecasteIcon1 == 601 || forecasteIcon1 == 602
        || forecasteIcon1 == 611 || forecasteIcon1 == 612 || forecasteIcon1 == 615
        || forecasteIcon1 == 616 || forecasteIcon1 == 620 || forecasteIcon1 == 621 || forecasteIcon1 == 622) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-snow"></i>`
        console.log("9");
      }
      else if (forecasteIcon1 == 701 || forecasteIcon1 == 711 || forecasteIcon1 == 721
        || forecasteIcon1 == 731 || forecasteIcon1 == 741 || forecasteIcon1 == 751
        || forecasteIcon1 == 761 || forecasteIcon1 == 762 || forecasteIcon1 == 771 || forecasteIcon1 == 781) {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-windy"></i>`
        console.log("10");
      }
      // else if (forecasteIcon1 == "Haze") {
      //   document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-dust"></i>`
      //   console.log("11");
      // }
      // else if (forecasteIcon1 == "Storm") {
      //   document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-sandstorm"></i>`
      //   console.log("12");
      // }

      // day2 

      let forecasteIcon2 = data.list[8].weather[0].main;

      if (forecasteIcon2 == "Clear") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-day-sunny"></i>`
      }

      else if (forecasteIcon2 == "Partly Cloudy") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-day-cloudy"></i>`
      }
      else if (forecasteIcon2 == "Partly Cloudy") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
      }
      else if (forecasteIcon2 == "Clouds") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-cloud"></i>`
      }
      else if (forecasteIcon2 == "Mostly Cloudy") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-cloudy"></i>`
      }
      else if (forecasteIcon2 == "Scattered Showers") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-showers"></i>`
      }
      else if (forecasteIcon2 == "Rain") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-rain"></i>`
      }
      else if (forecasteIcon2 == "Thunderstorm") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-thunderstorm"></i>`
      }
      else if (forecasteIcon2 == "Snow") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-snow"></i>`
      }
      else if (forecasteIcon2 == "Mist" || forecasteIcon2 == "Smoke") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-windy"></i>`
      }
      else if (forecasteIcon2 == "Haze") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-dust"></i>`
      }
      else if (forecasteIcon2 == "Storm") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-sandstorm"></i>`
      }

      // day3

      let forecasteIcon3 = data.list[16].weather[0].main;

      if (forecasteIcon3 == "Clear") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-day-sunny"></i>`
      }
      else if (forecasteIcon3 == "Partly Cloudy") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-day-cloudy"></i>`
      }
      else if (forecasteIcon3 == "Partly Cloudy") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
      }
      else if (forecasteIcon3 == "Clouds") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-cloud"></i>`
      }
      else if (forecasteIcon3 == "Mostly Cloudy") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-cloudy"></i>`
      }
      else if (forecasteIcon3 == "Scattered Showers") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-showers"></i>`
      }
      else if (forecasteIcon3 == "Rain") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-rain"></i>`
      }
      else if (forecasteIcon3 == "Thunderstorm") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-thunderstorm"></i>`
      }
      else if (forecasteIcon3 == "Snow") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-snow"></i>`
      }
      else if (forecasteIcon3 == "Mist" || forecasteIcon3 == "Smoke") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-windy"></i>`
      }
      else if (forecasteIcon3 == "Haze") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-dust"></i>`
      }
      else if (forecasteIcon3 == "Storm") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-sandstorm"></i>`
      }

      // day4

      let forecasteIcon4 = data.list[24].weather[0].main;

      if (forecasteIcon4 == "Clear") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-day-sunny"></i>`
      }

      else if (forecasteIcon4 == "Partly Cloudy") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-day-cloudy"></i>`
      }
      else if (forecasteIcon4 == "Partly Cloudy") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
      }
      if (forecasteIcon4 == "Clouds") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-cloud"></i>`
      }
      else if (forecasteIcon4 == "Mostly Cloudy") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-cloudy"></i>`
      }
      else if (forecasteIcon4 == "Scattered Showers") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-showers"></i>`
      }
      else if (forecasteIcon4 == "Rain") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-rain"></i>`
      }
      else if (forecasteIcon4 == "Thunderstorm") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-thunderstorm"></i>`
      }
      else if (forecasteIcon4 == "Snow") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-snow"></i>`
      }
      else if (forecasteIcon4 == "Mist" || forecasteIcon4 == "Smoke") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-windy"></i>`
      }
      else if (forecasteIcon4 == "Haze") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-dust"></i>`
      }
      else if (forecasteIcon4 == "Storm") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-sandstorm"></i>`
      }

      // day5

      let forecasteIcon5 = data.list[24].weather[0].main;

      if (forecasteIcon5 == "Clear") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-day-sunny"></i>`
      }

      else if (forecasteIcon5 == "Partly Cloudy") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-day-cloudy"></i>`
      }
      else if (forecasteIcon5 == "Partly Cloudy") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
      }
      if (forecasteIcon5 == "Clouds") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-cloud"></i>`
      }
      else if (forecasteIcon5 == "Mostly Cloudy") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-cloudy"></i>`
      }
      else if (forecasteIcon5 == "Scattered Showers") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-showers"></i>`
      }
      else if (forecasteIcon5 == "Rain") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-rain"></i>`
      }
      else if (forecasteIcon5 == "Thunderstorm") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-thunderstorm"></i>`
      }
      else if (forecasteIcon5 == "Snow" || forecasteIcon5 == "Smoke") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-snow"></i>`
      }
      else if (forecasteIcon5 == "Mist") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-windy"></i>`
      }
      else if (forecasteIcon5 == "Haze") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-dust"></i>`
      }
      else if (forecasteIcon5 == "Storm") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-sandstorm"></i>`
      }


    },

    error: function (error) {
      alert(error);
    }
  });


  // Now you can use all slider methods like



  $.ajax({

    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName ? cityName : "Karachi"}&appid=3890c8ecf66961bb6012c22cf547b58a&units=metric`,
    success: function (data) {

      let currentWeatherIcon = data.weather[0].main;

      if (currentWeatherIcon == "Clear") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-day-sunny"></i>`
      }

      else if (currentWeatherIcon == "Partly Cloudy") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-day-cloudy"></i>`
      }
      else if (currentWeatherIcon == "Partly Cloudy") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
      }
      if (currentWeatherIcon == "Clouds") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-cloud"></i>`
      }
      else if (currentWeatherIcon == "Mostly Cloudy") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-cloudy"></i>`
      }
      else if (currentWeatherIcon == "Scattered Showers") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-showers"></i>`
      }
      else if (currentWeatherIcon == "Rain") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-rain"></i>`
      }
      else if (currentWeatherIcon == "Thunderstorm") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-thunderstorm"></i>`
      }
      else if (currentWeatherIcon == "Snow") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-snow"></i>`
      }
      else if (currentWeatherIcon == "Mist" || currentWeatherIcon == "Smoke") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-windy"></i>`
      }
      else if (currentWeatherIcon == "Haze") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-dust"></i>`
      }
      else if (currentWeatherIcon == "Storm") {
        document.querySelector(".icon").innerHTML = `<i class="wi wi-sandstorm"></i>`
      }


      let city = document.querySelector(".city");
      city.innerHTML = data.name;

      let date = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      document.querySelector(".current-month").innerHTML = months[date.getMonth()];
      document.querySelector(".current-date").innerHTML = date.getDate();

      let currentTemp = document.querySelector(".temp");
      currentTemp.innerHTML = data.main.temp;

      let weathercondition = document.querySelector(".weather");
      weathercondition.innerHTML = data.weather[0].main;

      let visibility = document.querySelector(".visibility");
      visibility.innerHTML = ` <p class="visibility">
                               Visibility ${data.visibility}
                            </p>`;

      let humidity = document.querySelector(".humidity");
      humidity.innerHTML = `<p class="humidity">
                            Humidity ${data.main.humidity}%
                        </p>`;

      let wind = document.querySelector(".wind");
      wind.innerHTML = `<p class="wind">
                      wind  speed ${data.wind.speed}
                    </p>`

      let windDirction = document.querySelector(".wind-direction");
      windDirction.innerHTML = `<p class="wind-direction">
                                wind direction ${data.wind.deg}
                            </p>`;

      let currentTime = new Date();
      let sunrise = new Date(data.sys.sunrise * 1000);
      let sunset = new Date(data.sys.sunset * 1000);

      if (currentTime > sunrise && currentTime < sunset) {
        document.querySelector('body').style["background-image"] = `url(images/orange-png.png)`;
        document.querySelector('nav.navbar').style['background-color'] = `#fdd274`;
        document.querySelector("#myNav").style['background-color'] = `#fdd274`
      }
      else {
        document.querySelector('body').style["background-image"] = `url(images/blue-png.png)`;
        document.querySelector('nav.navbar').style['background-color'] = `#805fcb`;
      }

    },



    error: function (error) {
      alert(error);
    }
  });

}

// function showMobileResult(){
//   showCitiesWeather();
// }

function openSearchBar() {
  document.getElementById("myNav").style.height = "20%";

}

function closeBar() {
  document.getElementById("myNav").style.height = "0%";

}


window.onload = function () {

  swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 40,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      direction: 'horizontal',
      loop: true,
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,

    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  mySwiper = document.querySelector('.swiper-container').swiper;
  mySwiper.slideNext();

  $(".form-control").keyup(function (event) {
    if (event.keyCode === 13) {
      $("#search-icon").click();
    }
  });

  showCitiesWeather();
}

