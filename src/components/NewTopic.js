import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { Card, Button, CardTitle } from 'reactstrap';
import './componentStyles.css';

function NewTopic() {
  const [inputVal, changeInput] = useState('');
  const firebase = useFirebase();

  function resetInput() {
    changeInput('');
  }
  function onInputChange(e) {
    return changeInput(e && e.target && e.target.value);
  }
  function addTopic() {
    return firebase.push('topic', { text: inputVal || 'sample', done: false });
  }

  return (
    <Card className="new-card">
      <CardTitle>New Topic</CardTitle>
      <input value={inputVal} onChange={onInputChange} className="new-input" />
      <Button onClick={addTopic} className="new-add">
        Add
      </Button>
      <Button onClick={resetInput} className="new-cancel">
        Cancel
      </Button>
    </Card>
  );
}

export default NewTopic;
