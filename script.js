// console.log("hello jee");

// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

// function renderWeatherInfo(data){
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
//     document.body.appendChild(newPara);

// }

// async function fetchWeatherDetails(){
//     // let latitude =15.33;
//     // let longitude = 74.0833;
//     try{
//         let city = "Goa";
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
//         const data =  await response.json();
//         console.log("weather data:->", data);
        
//         renderWeatherInfo(data);
        
//     }catch(err){
        
//     }
    
// }

// async function getCustomWeather(){
//     try{
        
//         let lat =17.6333;
//         let lon = 18.3333;

//         const result = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
//         const data = (await result).json();
//         console.log("weather data:->",data);

//     }catch(err){
//         console.log("errrror found",err);
//     }
// }