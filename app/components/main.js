import React from 'react'
import WeatherForm from './weatherform'


export default React.createClass({
  render() {
    console.log("bababa");
//    return <div>Hi World {this.props.children} </div>
    return <div>Clever Title {WeatherForm} {this.props.children} </div>
  }
})
