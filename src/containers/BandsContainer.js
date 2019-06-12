import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import {connect} from 'react-redux';

class BandsContainer extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
       <BandInput/>
       {this.props.bands.map(band => <li>{band}</li>)}
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {bands: state.bands}
}
export default connect(mapStateToProps)(BandsContainer)
 