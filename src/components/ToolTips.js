import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import tooltipText from '../assets/tooltips.json';

const tooltipArray = Object.values(tooltipText)
var tt = String
export default function ToolTips() {
        const renderTooltip = (which) => {
          switch(which) {
            case 1: tt = renderTooltip(tooltipArray[0].content)
              break;
            case 2: tt = renderTooltip(tooltipArray[1].content)
              break;
            case 3: tt = renderTooltip(tooltipArray[2].content)
              break;
            default: tt = 'Default tooltip text'
          }
    return ((props) => (<Tooltip {...props}>{tt}</Tooltip>))
        }      
  }

