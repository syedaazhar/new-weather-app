window.onload = function () {

  var mySwiper = new Swiper ('.swiper-container', {
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
    slideShadows : true,
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

  // Now you can use all slider methods like


$.ajax({

    url :"http://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=3890c8ecf66961bb6012c22cf547b58a&units=metric",
    success: function(data){
    
      let weatherIcon =document.querySelector(".icon");
       weatherIcon.innerHTML=data.code;

       let city=document.querySelector(".city");
       city.innerHTML=data.name;

       let date = new Date();
       let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
       document.querySelector(".current-month").innerHTML=months[date.getMonth()];
       document.querySelector(".current-date").innerHTML=date.getDate();

       let currentTemp =document.querySelector(".temp");
       currentTemp.innerHTML=data.main.temp;

       let weathercondition =document.querySelector(".weather");
       weathercondition.innerHTML=data.weather[0].main;

       let visibility =document.querySelector(".visibility");
       visibility.innerHTML=` <p class="visibility">
                                 Visibility ${data.visibility}
                              </p>`;

       let humidity =document.querySelector(".humidity");
       humidity.innerHTML=`<p class="humidity">
                              Humidity ${data.main.humidity}%
                          </p>`;

       let wind =document.querySelector(".wind");
       wind.innerHTML=`<p class="wind">
                        wind  speed ${data.wind.speed}
                      </p>`

       let windDirction=document.querySelector(".wind-direction");
       windDirction.innerHTML=`<p class="wind-direction">
                                  wind direction ${data.wind.deg}
                              </p>`;
    },

    error: function(error){
      alert(error);
    }
  });

}

  function showSilder()
  {
    return getForecast();
  }
  function getForecast()
  {
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/forecast?q=karachi&appid=3890c8ecf66961bb6012c22cf547b58a&units=metric",

      success : function(data)
      {
        document.querySelector(".swiper-wrapper").innerHTML="";
        let forcast = new Date();
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        document.querySelector(".swiper-slide .card-day").innerHTML = days[forcast.getDay()];
        for(var i = 0; i < data.list.length; i++)
        {
          let swiperSlide=document.querySelector(".swiper-slide");
          swiperSlide.innerHTML +=`<h4 class="card-day">
                                          ${days}
                                      </h4>
                                      <i><img src ="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"</i>
                                      <diV class="card-icon">
                                          <h5 class="card-temp">
                                              ${data.list[i].main.temp}&deg
                                          </h5>    
                                      </diV>    
                                        
                                    `;
        }  
      },

      error: function(error){
        alert(error.responseJSON.message);
      }
    });

  }
