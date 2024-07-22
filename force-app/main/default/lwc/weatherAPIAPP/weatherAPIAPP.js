import { LightningElement } from 'lwc';

import getWeatherData from '@salesforce/apex/WeatherApiController.getWeatherData';
export default class WeatherAPIAPP extends LightningElement {

    cityl;
    weatherIcon;
    weatherText

    handleCity(event){
    this.cityl = event.target.value;
    }

//     handleGetWeather(event){
//   getWeatherData({city:this.cityl})
//   .then(response =>{
//     let weatherParseData = JSON.parse(response);
//       this.weatherIcon = weatherParseData.current.condition.icon;
//       this.weatherText = weatherParseData.current.condition.text;

//   })
//   .catch(error =>{
//     this.weatherText = 'no matching';
//     console.error('error',JSON.stringify(error));

//   })
// }

async handleGetWeather(event) {
    try {
      const response = await getWeatherData({ city: this.cityl });
      const weatherParseData = JSON.parse(response);
      this.weatherIcon = weatherParseData.current.condition.icon;
      this.weatherText = weatherParseData.current.condition.text;
    } catch (error) {
      this.weatherText = 'no matching';
      console.error('error', JSON.stringify(error));
    }
  }

}