//Init Storage
const storage = new StorageData();


const weatherLocation =  storage.getLocationData();


const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');


document.getElementById('w-change-btn').addEventListener('click', (e) =>{

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    storage.setLocationData(city, state);

 
    getWeather();
     

    $('#locModel').model('hide');

});

function getWeather(){
    weather.getWeather()
    .then(results => {
   // console.log(results);
   ui.paint(results);
})
.catch(err => console.log(err));
}


//console.log()