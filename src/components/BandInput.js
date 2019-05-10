// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  addBand: (name) => ({ type: 'ADD_BAND', payload: name})
}

export default connect(null, mapDispatchToProps)(
  class BandInput extends Component {

    state = {
      name: ""
    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.addBand(this.state.name)
      this.setState({ name: "" })
    }

    handleChange = (e) => {
      this.setState({ name: e.target.value })
    }

    render() {
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={this.handleChange}/>
            <input type="submit" />
          </form>
        </div>
      )
    }
  }
)
