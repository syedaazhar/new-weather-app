window.onload = function () {
  $.ajax({
    url:"http://api.openweathermap.org/data/2.5/forecast?q=karachi&appid=3890c8ecf66961bb6012c22cf547b58a&units=metric",

    success : function (data)
      {
        console.log(data);
        let forcast1 = new Date(data.list[0].dt * 1000);
        let forcast2 = new Date(data.list[8].dt * 1000);
        let forcast3 = new Date(data.list[16].dt * 1000);
        let forcast4 = new Date(data.list[24].dt * 1000);
        let forcast5 = new Date(data.list[32].dt * 1000);
        let forcast6 = new Date(data.list[0].dt * 1000);
        let forcast7 = new Date(data.list[0].dt * 1000);

        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

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
      },

      error: function(error){
        alert(error.responseJSON.message);
      }
  });

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

    url :"http://api.openweathermap.org/data/2.5/weather?q=karachi&appid=3890c8ecf66961bb6012c22cf547b58a&units=metric",
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

  
  //   $.ajax({
  //     url:"http://api.openweathermap.org/data/2.5/forecast?q=karachi&appid=3890c8ecf66961bb6012c22cf547b58a&units=metric",

      // success : function(data)
      // {
      //   document.querySelector(".swiper-wrapper").innerHTML="";
      //   let forcast = new Date();
      //   let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      //   document.querySelector(".swiper-slide .card-day").innerHTML = days[forcast.getDay()];
      //   for(var i = 0; i < data.list.length; i++)
      //   {
      //     let swiperSlide=document.querySelector(".swiper-slide");
      //     swiperSlide.innerHTML +=`<h4 class="card-day">
      //                                     ${days[forcast.getDay()]}
      //                                 </h4>
      //                                 <i><img src ="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"</i>
      //                                 <diV class="card-icon">
      //                                     <h5 class="card-temp">
      //                                         ${data.list[i].main.temp}&deg
      //                                     </h5>    
      //                                 </diV>    
                                        
      //                               `;
      //   }  
      // }

 
    // });

  // }
