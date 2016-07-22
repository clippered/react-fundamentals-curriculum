import React from 'react'


export default React.createClass({
  render() {
    console.log("bababa");
    return <div>Hi World {this.props.children} </div>
  }
})
