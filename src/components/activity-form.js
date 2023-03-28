import React, { useState, useRef } from 'react';
import '../App.css';

const AddActivityForm = ({ onAddActivity }) => {
  const [activityName, setActivityName] = useState('');
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);
  const activityNameInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddActivity({ name: activityName, isForGoodWeather });

    
    setActivityName('');
    setIsForGoodWeather(false);
    activityNameInput.current.focus();
  };

  return (
    <div className='add-activity'>
      <h2>Add new Activity</h2>
      <form onSubmit={handleSubmit} className='form' >
        <label htmlFor="activityName">Activity Name:</label>
        <input
          type="text"
          id="activityName"
          value={activityName}
          ref={activityNameInput}
          onChange={(e) => setActivityName(e.target.value)}
        />
        <br />
        <label htmlFor="isForGoodWeather">Good Weather Activity:</label>
        <input
          type="checkbox"
          id="isForGoodWeather"
          checked={isForGoodWeather}
          onChange={(e) => setIsForGoodWeather(e.target.checked)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddActivityForm;
