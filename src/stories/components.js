import React from 'react';
import compose from './compose';
import { mayBeStubbed } from '../';

export const CommentList = () => (
  <ul>

  </ul>
);
CommentList.displayName = 'CommentList';
export const CommentListContainer1 = compose(CommentList);
export const CommentListContainer2 = mayBeStubbed(CommentListContainer1);
export const CommentListContainer3 = mayBeStubbed(CommentListContainer1);

const style = {
  fontFamily: 'Arial',
};

export const Post1 = (post) => (
  <div style={style}>
    <h1>{post.title}</h1>
    <p>{post.text}</p>
    <hr />
    <h3>Comments</h3>
    <CommentListContainer1 postId={post.id} />
  </div>
);

export const Post2 = (post) => (
  <div style={style}>
    <h1>{post.title}</h1>
    <p>{post.text}</p>
    <hr />
    <h3>Comments</h3>
    <CommentListContainer2 postId={post.id} />
  </div>
);

export const Post3 = (post) => (
  <div style={style}>
    <h1>{post.title}</h1>
    <p>{post.text}</p>
    <hr />
    <h3>Comments</h3>
    <CommentListContainer3 postId={post.id} />
  </div>
);
