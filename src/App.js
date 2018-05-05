//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import React from "react"; import Titles from "./components/Titles"; import
Form from "./components/Form"; import Weather from "./components/Weather";

const API_KEY="8a04b6045df571e810ae8ff7c791c3ea";

class App extends React.Component{

  state={
    temp: undefined,
    city:undefined,
    country:undefined,
    description:undefined,
    humidity:undefined,
    error :undefined,
    message:undefined,
    cod:undefined,
  }
  
  getWeather=async (e)=>{
        e.preventDefault();

        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;

        const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);     
        const data=await api_call.json();
        console.log(data);
        if(city && country){
          if(data.cod!=404){
            this.setState({
            temp:data.main.temp,
            humidity:data.main.humidity,
            country:data.sys.country,
            city:data.name,
            description:data.weather[0].description,
            error:"",
            message:data.message,
          
             });
          }else{
              this.setState({
               message:"CITY NOT FOUND!!",
             });
          }
      }else{
          this.setState({
          temp:undefined,
          humidity:undefined,
          country:undefined,
          city:undefined,
          description:undefined,
          error:"Please enter country and city name!!",
          message: undefined,
         
        });
      }
     

    }
  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temp={this.state.temp} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                    message={this.state.message}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};




export default App;