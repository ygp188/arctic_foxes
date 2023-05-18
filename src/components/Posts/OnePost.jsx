import axios from 'axios';
import React, { useState } from 'react';

export default function OnePost({
  post, deleteHandler, setAllPosts, user,
}) {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState('');

  const changeHandler = (e) => setInput(e.target.value);

  const clickHandler = async () => {
    const response = await axios.patch(`/api/posts/${post.id}`, { input });
    setAllPosts((prev) => prev.map((el) => {
      if (el.id === post.id) {
        return response.data;
      }
      return el;
    }));
    setShowInput(false);
  };

  return (
    <div className="card mb-3 me-3" style={{ width: '18rem' }}>
      <div className="card-body">
        {!showInput ? <h5 className="card-title">{post.body}</h5> : (
          <input
            name="body"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name..."
            value={input}
            onChange={changeHandler}
          />
        )}
        <p className="card-text">{post.User?.username}</p>

        {user.id === post.user_id
          && (
            <>
              {showInput && <button className="btn btn-danger" type="button" onClick={clickHandler}>Save</button>}
              <button className="btn btn-danger" type="button" onClick={() => setShowInput((prev) => !prev)}>Edit</button>
              <button className="btn btn-danger" type="button" onClick={() => deleteHandler(post.id)}>Delete</button>
            </>
          )}

      </div>
    </div>
  );
}
