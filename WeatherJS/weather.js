class Weather{
    constructor(city, state){
        this.apiKey = '6fbeb4ca953313a46ff3e786d27f8f30';
        this.city = city;
        this.state = state;
    }


    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/
        conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;

    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
     
}