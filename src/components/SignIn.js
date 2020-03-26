import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../auth/base.js';
import { AuthContext } from '../auth/auth.js';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import './componentStyles.css';

const Signin = ({ history }, props) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Card className="card-body">
      <CardTitle>Please enter credentials to Sign In.</CardTitle>
      <CardBody>
        <form onSubmit={handleLogin}>
          <CardSubtitle>
            Email
            <input name="email" type="email" placeholder="Email" />
          </CardSubtitle>
          <CardSubtitle>
            Password
            <input name="password" type="password" placeholder="Password" />
          </CardSubtitle>
          <Button type="submit">Sign In</Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default withRouter(Signin);
