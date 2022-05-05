let weather = {
    apiKey: "d25afb2658d096dfd0136a96ff778ac2",
    fetchWeather: function (city){
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey   
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data; //get city name;function to display
        const {icon, description} = data.weather[0];//get the data.weather object and extracticon and description
        const {temp, humidity} = data.main;
        const {speed} = data.wind;

        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " +name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        console.log("http://openweathermap.org/img/wn/"+ icon + ".png");
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText =  temp +"°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed" + speed + "km/hr";
        document.querySelector(".weather").classList.remove("loading");
       


    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },

};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();


});

//add an event listener for the input for when the enter key is pressed

document

    .querySelector(".search-bar")
    .addEventListener("keyup", function (event){
        if (event.key == "Enter"){
            weather.search();
        }
    });

    weather.fetchWeather("Nairobi");