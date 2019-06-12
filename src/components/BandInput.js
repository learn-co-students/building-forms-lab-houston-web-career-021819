// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
  state = { name: ''}

  handleOnchange = (e) =>{
    this.setState({name: e.target.value})
  }

  handleOnsubmit = (e) =>{
   e.preventDefault()
   this.props.addBand(this.state.name)
   this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleOnsubmit}>
          <label>Band Input</label>
          <input type = "text" onChange = {this.handleOnchange}/>
          <button type = "submit">Submit</button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = {
  addBand: (band) => ({type: 'ADD_BAND', band:band})
}

export default connect(null, mapDispatchToProps)(BandInput)
