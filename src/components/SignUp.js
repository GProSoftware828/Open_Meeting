import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../auth/base';
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

const SignUp = ({ history }, cancel) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <Card className="card-body">
      <CardTitle>Please enter credentials to Sign Up.</CardTitle>
      <CardBody>
        <form onSubmit={handleSignUp}>
          <CardSubtitle>
            Email
            <input name="email" type="email" placeholder="Email" />
          </CardSubtitle>
          <CardSubtitle>
            Password
            <input name="password" type="password" placeholder="Password" />
          </CardSubtitle>
          <Button type="submit">Sign Up</Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default withRouter(SignUp);
