import axios from 'axios';
import React, { useState } from 'react';

export default function PostForm({ setAllPosts }) {
  const [input, setInput] = useState('');

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/posts', { input });
    setAllPosts((prev) => [...prev, response.data]);
  };

  return (
    <div className="d-flex flex-row justify-content-center mb-3 mt-3">
      <form onSubmit={submitHandler}>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Body
          <input
            name="body"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name..."
            value={input}
            onChange={changeHandler}
          />
        </label>
        <button className="btn btn-info" type="submit">Add a post</button>
      </form>
    </div>
  );
}
