import axios from 'axios';
import React from 'react';

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post('/auth/login', Object.fromEntries(new FormData(e.target)));

    if (response.status === 200) {
      window.location = '/foxes';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          Email address
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

        </label>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">
          Password
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />

        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
