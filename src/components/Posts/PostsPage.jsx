import axios from 'axios';
import React, { useState } from 'react';
import OnePost from './OnePost';
import PostForm from './PostForm';

export default function PostsPage({ posts, user }) {
  const [allPosts, setAllPosts] = useState(posts);

  const deleteHandler = async (id) => {
    await axios.delete(`/api/posts/${id}`);
    setAllPosts((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div>
      <PostForm setAllPosts={setAllPosts} />
      {allPosts?.map((post) => (
        <OnePost
          key={post.id}
          post={post}
          deleteHandler={deleteHandler}
          setAllPosts={setAllPosts}
          user={user}
        />
      ))}
    </div>
  );
}
