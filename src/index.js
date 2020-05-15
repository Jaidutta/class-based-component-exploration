import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/season-display/season-display.component';

import Spinner from './components/spinner/spinner.component'
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      lat: null,
      errorMessage: ''
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => this.setState({lat: position.coords.latitude}), err => this.setState({errorMessage : err.message})
    );
  }
  renderContent() {
    const {lat, errorMessage} = this.state
    if(errorMessage && !lat){
      return <div>Error: {errorMessage}</div>
    }

    if(lat && !errorMessage){
      return <SeasonDisplay latitude={lat}/>
    }

    return <Spinner text="Please Accept Location Request"/>
  }
  render() {
    return (
      this.renderContent()
    )
  }
  
  
}

ReactDOM.render(<App/>, document.querySelector('#root'))

export default App;
