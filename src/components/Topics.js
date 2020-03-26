import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import TopicItem from './Topic';

const topicsQuery = {
  path: 'topic',
  queryParams: ['limitToLast=10']
};

function Topics() {
  useFirebaseConnect(() => [topicsQuery]);

  const topics = useSelector(state => state.firebase.ordered.topic);

  if (!isLoaded(topics)) {
    return 'Loading the database...';
  }

  if (isEmpty(topics)) {
    return 'Topic list is empty';
  }

  return topics
    .reverse()
    .map(({ value: topic, key }, ind) => (
      <TopicItem key={`${key}-${ind}`} id={key} {...topic} />
    ));
}

export default Topics;
