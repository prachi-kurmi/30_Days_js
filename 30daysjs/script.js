const apiKey = "Your_API_Key"

const weatherDataElement = document.querySelector(".weather-data")
const cityNameElement = document.querySelector("#city-name")
const formElement = document.querySelector("form")
const imgIcon = document.querySelector(".icon")

formElement.addEventListener("submit", (e)=>{
    e.preventDefault();
    const cityValue = cityNameElement.value

    getWeatherData(cityValue)
})

async function getWeatherData(cityValue){
    try{
        const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response is not ok!")
        }

        const data = await response.json();

        const temprature = Math.floor(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon

        const details = [
            `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ]

        weatherDataElement.querySelector(".temp").textContent = `${temprature}°C`
        weatherDataElement.querySelector(".desc").textContent = `${description}`

        imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`

        weatherDataElement.querySelector(".details").innerHTML = details.map((detail)=>{
           return `<div>${detail}</div>`
        }).join("")

    }catch(err){
        weatherDataElement.querySelector(".temp").textContent = ""
        imgIcon.innerHTML = ""
        weatherDataElement.querySelector(".desc").textContent = "An Error Occurred!"

    }

}