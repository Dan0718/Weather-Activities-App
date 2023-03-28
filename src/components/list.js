import React from 'react';
import '../App.css';

const List = ({ activities, weather, isGoodWeather }) => {
  return (
    <div className='list'>
      {weather && (
        <>
          <h1>
            {weather.conditionEmoji} {weather.condition} {weather.temperature}°C
          </h1>
          {isGoodWeather ? (
            <p>The weather is good, you can do the following activities:</p>
          ) : (
            <p>The weather is bad, you can do the following activities:</p>
          )}
        </>
      )}

      <h2>{isGoodWeather ? 'Good Weather Activities' : 'Bad Weather Activities'}</h2>
      <ul className='activity-list'>
        {activities.map((activity) => (
          <li className='list-item' key={activity.id}>{activity.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

