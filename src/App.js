import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip'
import logo from './logo.svg';
import tooltipText from './assets/tooltips.json';

const tooltipArray = Object.values(tooltipText)

function App() {
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
  return ((<Tooltip>{tt}</Tooltip>))
        } 
  return (
    <>
    <div  style={{display: 'flex', justifyContent: 'center'}}>
      <OverlayTrigger
        style={{position:'center'}}
        delay={{ hide: 450, show: 300 }}
        overlay={renderTT(1)}
        placement="bottom">
          <h4 style={{mb:50, fontWeight: 'bold', fontSize: "30"}}>Demo Tooltips</h4>
      </OverlayTrigger>
    </div>
      <div  style={{display: 'flex', justifyContent: 'center'}}>  
        <img src={logo} style={{height: '250px', width: '250px'}} alt="logo" />
      </div>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={renderTT(2)}
        placement="top">
        <div style={{display: 'flex', justifyContent: 'center'}}>
          Tooltips can be placed in different locations
        </div>
      </OverlayTrigger>
      
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <p>React-Bootstrap Tooltip Component</p>
      </div>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={renderTT(3)}
        placement="bottom">
        <div style={{display: 'flex', justifyContent: 'center'}}>  
          <Button variant="warning">Tooltip Button</Button>
        </div>
      </OverlayTrigger>
    </>
  );
}
export default App;
