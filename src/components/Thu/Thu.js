import React from 'react';
import snow from '../../images/snow.svg';

const Thu = () => (
  <div className="day">
    <h2 className="day-header">Thursday</h2>
    <ul className="day-temp-list">
      <li className="day-time">
        <span className="time">00:00</span>
        <span className="temp">-2</span>
      </li>
      <li className="day-time">
        <span className="time">03:00</span>
        <span className="temp">-5</span>
      </li>
      <li className="day-time">
        <span className="time">06:00</span>
        <span className="temp lowest">-7</span>
      </li>
      <li className="day-time">
        <span className="time">09:00</span>
        <span className="temp">-4</span>
      </li>
      <li className="day-time">
        <span className="time">12:00</span>
        <span className="temp">+0</span>
      </li>
      <li className="day-time">
        <span className="time">15:00</span>
        <span className="temp highest">+3</span>
      </li>
      <li className="day-time">
        <span className="time">18:00</span>
        <span className="temp">+1</span>
      </li>
      <li className="day-time">
        <span className="time">21:00</span>
        <span className="temp">-1</span>
      </li>
    </ul>
    <img className="day-image" src={snow} alt="" />
  </div>
);

export default Thu;
