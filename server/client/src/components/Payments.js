import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
import StripeCheckout from 'react-stripe-checkout';
import config from '../config'


class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={(token) => { console.log(token)}}
        stripeKey={config.stripePublicKey}
        name="App"
        token={(token) => { this.props.handleToken(token)}}
        description="Pay me for stuff lol"
      >
      <button className="btn">
      Add credits
      </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
