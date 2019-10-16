import React from 'react';
import sun from '../../images/sun.svg';

const Fri = () => (
  <div className="day">
    <h2 className="day-header">Friday</h2>
    <ul className="day-temp-list">
      <li className="day-time">
        <span className="time">00:00</span>
        <span className="temp">+23</span>
      </li>
      <li className="day-time">
        <span className="time">03:00</span>
        <span className="temp">+21</span>
      </li>
      <li className="day-time">
        <span className="time">06:00</span>
        <span className="temp lowest">+20</span>
      </li>
      <li className="day-time">
        <span className="time">09:00</span>
        <span className="temp">+24</span>
      </li>
      <li className="day-time">
        <span className="time">12:00</span>
        <span className="temp">+26</span>
      </li>
      <li className="day-time">
        <span className="time">15:00</span>
        <span className="temp highest">+28</span>
      </li>
      <li className="day-time">
        <span className="time">18:00</span>
        <span className="temp">+25</span>
      </li>
      <li className="day-time">
        <span className="time">21:00</span>
        <span className="temp">+22</span>
      </li>
    </ul>
    <img className="weather-image" src={sun} alt="" />
  </div>
);

export default Fri;
