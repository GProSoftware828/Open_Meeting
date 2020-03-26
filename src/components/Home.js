import React from 'react';
import NewTopic from './NewTopic';
import Topics from './Topics';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import './componentStyles.css';

class Home extends React.Component {
  render() {
    return (
      <Card className="home-card">
        <CardTitle>Add A Topic To Discuss At The Meeting</CardTitle>
        <CardSubtitle>
          Please don't try to be humorous- respectable and appropriate.
        </CardSubtitle>
        <NewTopic />
        <Topics />
      </Card>
    );
  }
}

export default Home;
