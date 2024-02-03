
let city = document.getElementById("CityName");
let temp = document.getElementById("Temperature");
let info = document.getElementById("Description");
let input = document.getElementById('info');
let apiKey = 'a2234b52247b55bb3ca63b9c51473be1';


input.addEventListener('keydown', (event)=>{
    if (event.key === 'Enter'){
        let val = input.value;
        if(val){
            getInfo(val);
        }
    }
});


function getInfo(val){
    let api_Url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apiKey}`;
    let promise =  fetch(api_Url);
    promise.then( res => res.json()).then(data =>{
        console.log(data.main.temp);
        city.textContent= data.name;
        let cal = Math.round((data.main.temp-273.15)*(9/5) +32);
        temp.textContent= `${cal}°F`
        info.textContent = data.weather[0].description;
    });
}






