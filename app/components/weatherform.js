import React from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'

const weatherForm = (
  <form>
    <FormGroup controlId="formControlsText">
      <FormControl type="text" placeholder="St George, Utah" />
      <Button type="submit">Get Weather</Button>
    </FormGroup>
  </form>
);

export default weatherForm;
