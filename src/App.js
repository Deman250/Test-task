import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

// Images
import cloudy from './images/cloudy.svg';
import light from './images/light.svg';
import snow from './images/snow.svg';
import storm from './images/storm.svg';
import sun from './images/sun.svg';

// Components
import Mon from './components/Mon/Mon';
import Tue from './components/Tue/Tue';
import Wed from './components/Wed/Wed';
import Thu from './components/Thu/Thu';
import Fri from './components/Fri/Fri';

// Css
import './day.css';
import './index.css';

const App = () => (
  <BrowserRouter>
    <ul className="week-list">
      <li className="week-day">
        <h3 className="header">
          <NavLink className="day-link" to="/mon">Monday</NavLink>
        </h3>
        <img className="weather-image" src={light} alt="" />
        <span className="highest">+24</span>
        <span className="lowest">+13</span>
      </li>
      <li className="week-day">
        <h3 className="header">
          <NavLink className="day-link" to="/tue">Tuesday</NavLink>
        </h3>
        <img className="weather-image" src={storm} alt="" />
        <span className="highest">+23</span>
        <span className="lowest">+11</span>
      </li>
      <li className="week-day">
        <h3 className="header">
          <NavLink className="day-link" to="/wed">Wednesday</NavLink>
        </h3>
        <img className="weather-image" src={cloudy} alt="" />
        <span className="highest">+27</span>
        <span className="lowest">+18</span>
      </li>
      <li className="week-day">
        <h3 className="header">
          <NavLink className="day-link" to="/thu">Thursday</NavLink>
        </h3>
        <img className="weather-image" src={snow} alt="" />
        <span className="highest">+3</span>
        <span className="lowest">-7</span>
      </li>
      <li className="week-day">
        <h3 className="header">
          <NavLink className="day-link" to="/fri">Friday</NavLink>
        </h3>
        <img className="weather-image" src={sun} alt="" />
        <span className="highest">+28</span>
        <span className="lowest">+20</span>
      </li>
    </ul>

    <Switch>
      <Route path="/mon" component={Mon} />
      <Route path="/tue" component={Tue} />
      <Route path="/wed" component={Wed} />
      <Route path="/thu" component={Thu} />
      <Route path="/fri" component={Fri} />
    </Switch>
  </BrowserRouter>
);

export default App;
