import logo from './logo.svg';
import './App.css';
import React from 'react';
import WeatherForecast from './Components/WeatherForecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <WeatherForecast/>
        </section>
      </header>
    </div>
  );
  }
  

export default App;
