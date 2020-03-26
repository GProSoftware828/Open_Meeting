import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Button, Popover, PopoverBody } from 'reactstrap';

const SignedOutLinks = () => {
  const [popoverSignUpOpen, setPopoverSignUpOpen] = useState(false);
  const [popoverSignInOpen, setPopoverSignInOpen] = useState(false);

  const toggleSignUp = () => {
    if (!popoverSignUpOpen) {
      setPopoverSignUpOpen(true);
      setPopoverSignInOpen(false);
    } else {
      setPopoverSignUpOpen(false);
      setPopoverSignInOpen(false);
    }
  };
  const toggleSignIn = () => {
    if (!popoverSignInOpen) {
      setPopoverSignInOpen(true);
      setPopoverSignUpOpen(false);
    } else {
      setPopoverSignInOpen(false);
      setPopoverSignUpOpen(false);
    }
  };
  return (
    <ul className="right">
      <li className="linksDisplay">
        <Button id="Popover1" type="button" onClick={toggleSignUp}>
          Sign Up
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverSignUpOpen}
          target="Popover1"
          // toggle={toggleSignUp}
        >
          <PopoverBody>
            <SignUp />
          </PopoverBody>
        </Popover>
      </li>
      <li className="linksDisplay">
        <Button id="Popover1" type="button" onClick={toggleSignIn}>
          Sign In
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverSignInOpen}
          target="Popover1"
          // toggle={toggleSignIn}
        >
          <PopoverBody>
            <SignIn />
          </PopoverBody>
        </Popover>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
