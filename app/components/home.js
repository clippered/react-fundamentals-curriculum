import React from 'react'
/*
import {Button, Jumbotron} from 'react-bootstrap'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

const formInstance = (
  <form>
    <FormGroup controlId="formControlsText">
      <ControlLabel>Enter a City and State</ControlLabel>
      <FormControl type="text" placeholder="St George, Utah" />
      <Button type="submit">Get Weather</Button>
    </FormGroup>
  </form>
);
*/
import WeatherForm from './weatherform'

export default React.createClass({
  render() {
    console.log("oist");
//    return formInstance
    return <div> <h2>Enter a City and State</h2> {WeatherForm} </div>
  }
})
