import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => {
      return <li>{band.name}</li>;
    });
  };

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{this.renderBands()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bands: state.bands };
};

const mapDispatchToProps = dispatch => {
  return {
    addBand: bandData => dispatch({ type: "ADD_BAND", band: bandData })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
