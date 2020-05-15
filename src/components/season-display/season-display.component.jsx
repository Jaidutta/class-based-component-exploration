import React from 'react'
import './season-display.style.css';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
  summer: {
    text: 'Let\'s Hit The Beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
}

const SeasonDisplay = ({latitude}) => {
  const season = getSeason(latitude, new Date().getMonth())
  // const text = season === 'winter' ? 'Burr, it is chilly' : 'Let\'s hit the beach'
  // const icon = season === 'winter' ? 'snowflake' : 'sun'
  const {text, iconName} = seasonConfig[season]

    return(
      <div className={`season-display ${season}`}>
        <i className={`icon-top massive ${iconName} icon`} ></i>
        <h1 className="title">{text}</h1>
        <i className={`icon-bottom massive ${iconName} icon`}></i>
      </div>
    )
  
}

export default SeasonDisplay;
