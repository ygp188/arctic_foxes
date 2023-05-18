import React, { useState } from 'react';

export default function FoxForm({ setAllFoxes }) {
  const [input, setInput] = useState({ name: '', img: '' });

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/foxes', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    setAllFoxes((prev) => [data, ...prev]);
    setInput({ name: '', img: '' });
  };

  return (
    <div className="d-flex flex-row justify-content-center mb-3 mt-3">
      <form onSubmit={(event) => submitHandler(event)}>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name..."
            value={input.name}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Image
          <input
            name="img"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="image..."
            value={input.img}
            onChange={changeHandler}
          />
        </label>
        <button className="btn btn-info" type="submit">Add a fox</button>
      </form>
    </div>
  );
}
