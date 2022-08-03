import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
    <Card className="border border-secondary text-center" style={{ display: 'block', padding: 30 }}>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={renderTT(1)}
        placement="top">
          <h4 style={{fontWeight: 'bold', fontSize: "30"}}>Demo Tooltips</h4>
      </OverlayTrigger>
      <img src={logo} className="App-logo" alt="logo" />
      <Card>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={renderTT(2)}
        placement="top">
        <Card>
          Edit <code>src/App.js</code> and save to reload.
        </Card>
      </OverlayTrigger>
      </Card>

      <p>React-Bootstrap Tooltip Component</p>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={renderTT(3)}
        placement="bottom"
      ><Button variant="warning">Tooltip Button</Button>
      </OverlayTrigger>,
    </Card>
  );
}

