const apiKey = "Your_API_Key"; // Replace with your actual API key

document.addEventListener("DOMContentLoaded", () => {
    const weatherDataElement = document.querySelector(".weather-data");
    const cityNameElement = document.querySelector("#city-name");
    const formElement = document.querySelector("form");
    const imgIcon = document.querySelector(".icon");

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        const cityValue = cityNameElement.value;
        getWeatherData(cityValue);
    });

    async function getWeatherData(cityValue) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error("Network response is not ok!");
            }

            const data = await response.json();

            // Display current weather
            const temperature = Math.floor(data.main.temp);
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const feelsLike = Math.floor(data.main.feels_like);
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            weatherDataElement.querySelector(".temp").textContent = `${temperature}°C`;
            weatherDataElement.querySelector(".desc").textContent = `${description}`;
            imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">`;
            weatherDataElement.querySelector(".feels-like").textContent = `Feels Like: ${feelsLike}°C`;
            weatherDataElement.querySelector(".humidity").textContent = `Humidity: ${humidity}%`;
            weatherDataElement.querySelector(".wind-speed").textContent = `Wind Speed: ${windSpeed} m/s`;

            // Fetch and display five-day forecast
            await getForecastData(cityValue);
        } catch (err) {
            weatherDataElement.querySelector(".temp").textContent = "";
            imgIcon.innerHTML = "";
            weatherDataElement.querySelector(".desc").textContent = "An Error Occurred!";
            weatherDataElement.querySelector(".feels-like").textContent = "";
            weatherDataElement.querySelector(".humidity").textContent = "";
            weatherDataElement.querySelector(".wind-speed").textContent = "";
            console.error(err);
        }
    }

    async function getForecastData(cityValue) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error("Network response is not ok!");
            }

            const data = await response.json();
            const forecastDataElement = document.querySelector(".forecast-data");
            forecastDataElement.innerHTML = ""; // Clear previous data

            // Filter data to get one entry per day (around 12:00 PM)
            const dailyForecasts = data.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));

            dailyForecasts.forEach(forecast => {
                const forecastDate = new Date(forecast.dt * 1000);
                const forecastTemperature = Math.floor(forecast.main.temp);
                const forecastDescription = forecast.weather[0].description;
                const forecastIcon = forecast.weather[0].icon;

                const forecastItem = document.createElement("div");
                forecastItem.classList.add("forecast-item");
                forecastItem.innerHTML = `
                    <div>${forecastDate.toLocaleDateString("en-US", { weekday: "short" })}</div>
                    <div>${forecastTemperature}°C</div>
                    <div><img src="https://openweathermap.org/img/wn/${forecastIcon}.png" alt="${forecastDescription}"></div>
                    <div>${forecastDescription}</div>
                `;
                forecastDataElement.appendChild(forecastItem);
            });

        } catch (err) {
            console.error(err);
        }
    }
});
