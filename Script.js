const apiKey = "11df37ef3af395ca66f0ff1381352e31";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const goButton= document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#weatherCity").innerHTML=data.name;
    document.querySelector("#temperature").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector("#feelsLike").innerHTML="Feels Like - "+ data.weather[0].description;
    document.querySelector("#humidity").innerHTML="Humidity - "+ data.main.humidity + "%";
    document.querySelector("#WindSpeed").innerHTML="Wind Speed - "+ data.wind.speed +"km/h";
    document.querySelector("#longitude").innerHTML="longitude - "+ data.coord.lon ;
    document.querySelector("#latitude").innerHTML="latitude - "+ data.coord.lat ;

}

goButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

