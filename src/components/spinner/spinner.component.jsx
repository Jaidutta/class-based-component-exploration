import React from 'react';
import './spinner.style.css'
const Spinner = ({text}) => {
  return(
    <div className="spinner">
      <div className="ui active dimmer massive">
        <div className="ui text loader text">{text}</div>
      </div>
    </div>
  )
}

Spinner.defaultProps = {
  text: 'Loading'
}

export default Spinner;