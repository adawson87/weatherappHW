// e4848be95ae4c25dbba706c97d7c5b9f
let currentEl = document.querySelector('#currentWeather')
let searchBtn= document.querySelector("#searchBtn")
searchBtn.addEventListener("click", function(event){
    event.preventDefault()
    let searchInput= document.querySelector("#searchInput").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=e4848be95ae4c25dbba706c97d7c5b9f&units=imperial`)
.then(response=>{
    return response.json()
})
.then(data=>{
    let lat= data.coord.lat
    let lon= data.coord.lon
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=e4848be95ae4c25dbba706c97d7c5b9f&units=imperial`)
    .then(openres=>{
        return openres.json()

    })
    .then(opendata=>{
        // Empty Current Div of HTML so they do not stack
        currentEl.innerHTML = "";
        // Data object returned from query
        console.log(opendata)
        // variable to define city name
        let cityName = data.name
        // Create an H4 Element to hold the cityname
        let cityNameEl = document.createElement('h4')
        // Set text content of H4 to cityname
        cityNameEl.textContent = cityName;

        // Append the H4 element to the current weather div in the HTML;
        currentEl.appendChild(cityNameEl)
    }) 
    console.log(data)
})
})

