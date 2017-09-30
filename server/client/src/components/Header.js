import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {

  renderContent() {
    const { auth } = this.props;
    return auth
      ? <div>
        <li><a href="/api/logout">Logout</a></li>
        <li><Payments /></li>
        </div>
      : <li><a href="/auth/google">Login</a></li>
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({auth}) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header);
