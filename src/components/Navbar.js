import React, { useContext, useCallback } from 'react';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { AuthContext } from '../auth/auth.js';
import app from '../auth/base';

const Navbar = ({ history }) => {
  const handleLogout = useCallback(
    async event => {
      event.preventDefault();
      try {
        await app.auth().signOut();
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="nav-bar">
      <div className="container">
        <div to="/" onClick={handleLogout} className="titleHeader">
          <div>Open Meeting</div>
        </div>
      </div>
      {currentUser ? <SignedInLinks /> : <SignedOutLinks />}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state: ', state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
