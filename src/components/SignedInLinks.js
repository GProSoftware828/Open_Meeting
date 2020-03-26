import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../auth/base';
import { Card, Button } from 'reactstrap';

const SignedInLinks = ({ history }) => {
  const handleLogOut = useCallback(
    async event => {
      event.preventDefault();
      try {
        await app.auth().signOut();
        history.push('/login');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <ul className="right">
      <li className="linksDisplay">
        <Card>
          <Button onClick={handleLogOut}>Log Out</Button>
        </Card>
      </li>
    </ul>
  );
};

export default withRouter(SignedInLinks);
