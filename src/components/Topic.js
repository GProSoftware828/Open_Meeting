import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import './componentStyles.css';
import { Card, CardText, Button } from 'reactstrap';

function TopicItem({ id }) {
  const topic = useSelector(state => state.firebase.data.topic[id]);
  const firebase = useFirebase();

  function deleteTopic() {
    return firebase.remove(`topic/${id}`);
  }

  return (
    <ul>
      <Card className="topic-card">
        <CardText>{topic.text || topic.name}</CardText>
        <Button onClick={deleteTopic}>Delete</Button>
      </Card>
    </ul>
  );
}

TopicItem.propTypes = {
  id: PropTypes.string.isRequired
};

export default TopicItem;
