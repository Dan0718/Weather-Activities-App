import React, { useState, useEffect } from 'react';
import './App.css';
import AddActivityForm from './components/activity-form';
import { uid } from 'uid';
import List from './components/list';

function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    const fetchWeather = () => {
      fetch('https://example-apis.vercel.app/api/weather')
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Log the weather data to the console
          setWeather(data);
        });
    };

    fetchWeather();
    
  
    const timer = setInterval(() => {
      fetchWeather();
    }, 5000);
  
    return () => {
      clearInterval(timer); 
    };
  }, []);
  

  const handleAddActivity = (newActivity) => {
    const activityWithId = { ...newActivity, id: uid() };
    setActivities([...activities, activityWithId]);
  };
  
  const isGoodWeather = weather && weather.temperature > 10 && weather.condition !== '🌧️' && weather.condition !== '🌨️' && weather.condition !== '☁️';

  return (
    <div className="Weather-App">
      <header className="App-header">Weather & Activities App</header>

      <AddActivityForm onAddActivity={handleAddActivity} />
      <List activities={activities.filter(activity => activity.isForGoodWeather === isGoodWeather)} weather={weather} isGoodWeather={isGoodWeather} />


    </div>
  );
}

export default App;
