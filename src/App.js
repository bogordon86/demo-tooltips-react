import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip'
import logo from './logo.svg';
import tooltipText from './assets/tooltips.json';

const tooltipArray = Object.values(tooltipText)

export default function App() {
  const renderTT = (which) => {
    var tt = String
    switch(which) {
      case 1: tt = tooltipArray[0].content
        break;
      case 2: tt = tooltipArray[1].content
        break;
      case 3: tt = tooltipArray[2].content
        break;
      default: tt = 'Default tooltip text'
    }
  return (<Tooltip>{tt}</Tooltip>)
        } 
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={renderTT(1)}
        placement="right">
          <header style={{fontWeight: 'bold'}}>Demo Tooltips</header>
      </OverlayTrigger>
      <img src={logo} className="App-logo" alt="logo" />
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={renderTT(2)}
        placement="right">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </OverlayTrigger>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <h4>React-Bootstrap Tooltip Component</h4>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={renderTT(3)}
        placement="bottom"
      ><Button variant="warning">Tooltip Button</Button>
      </OverlayTrigger>,
    </div>
  );
}

