import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  bands: state.bands
})

export default connect(mapStateToProps, null)(
  class BandsContainer extends Component {
    render() {
      return(
        <div>
          <BandInput />
          <ul>
            {this.props.bands.map(b => (<li>{b}</li>))}
          </ul>
        </div>
      )
    }
  }
)
