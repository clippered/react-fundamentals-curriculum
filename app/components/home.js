import React from 'react'
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

const jumbotronInstance = (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
);

export default React.createClass({
  render() {
    console.log("oist");
//    return <div>Hi Home abc</div>
//    return jumbotronInstance
    return formInstance
  }
})
