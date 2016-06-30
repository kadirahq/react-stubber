import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Post1, Post2, Post3, CommentListContainer3 } from './components';
import { stub } from '../';

const stories = storiesOf('React Stubber', module);

stories.add('without stub', () => (
  <Post1
    id="the-id"
    title="Stubbing React Containers"
    text="This is not something hard. Let's see how to do it."
  />
));

stories.add('with default stub', () => (
  <Post2
    id="the-id"
    title="Stubbing React Containers"
    text="This is not something hard. Let's see how to do it."
  />
));

stories.add('with custom stub', () => {
  stub(CommentListContainer3, (props) => (
    <div>Comments for postId: {props.postId}</div>
  ));
  return (
    <Post3
      id="the-id"
      title="Stubbing for React Storybook."
      text="We can use react-stubber for that."
    />
  );
});
