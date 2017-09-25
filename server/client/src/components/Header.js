import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderContent() {
    const { auth } = this.props;
    return auth
      ? <li><a href="/api/logout">Logout</a></li>
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
