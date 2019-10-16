import React from 'react';
import storm from '../../images/storm.svg';

const Tue = () => (
  <div className="day">
    <h2 className="day-header">Tuesday</h2>
    <ul className="day-temp-list">
      <li className="day-time">
        <span className="time">00:00</span>
        <span className="temp">+15</span>
      </li>
      <li className="day-time">
        <span className="time">03:00</span>
        <span className="temp">+14</span>
      </li>
      <li className="day-time">
        <span className="time">06:00</span>
        <span className="temp lowest">+11</span>
      </li>
      <li className="day-time">
        <span className="time">09:00</span>
        <span className="temp">+16</span>
      </li>
      <li className="day-time">
        <span className="time">12:00</span>
        <span className="temp">+19</span>
      </li>
      <li className="day-time">
        <span className="time">15:00</span>
        <span className="temp highest">+23</span>
      </li>
      <li className="day-time">
        <span className="time">18:00</span>
        <span className="temp">+19</span>
      </li>
      <li className="day-time">
        <span className="time">21:00</span>
        <span className="temp">+16</span>
      </li>
    </ul>
    <img className="day-image" src={storm} alt="" />
  </div>
);

export default Tue;
