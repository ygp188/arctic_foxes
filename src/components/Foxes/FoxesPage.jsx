import React, { useState } from 'react';
import FoxForm from './FoxForm';
import OneFox from './OneFox';

export default function FoxesPage({ foxes, user }) {
  const [allFoxes, setAllFoxes] = useState(foxes);

  const deleteHandler = async (id) => {
    await fetch(`/api/foxes/${id}`, { method: 'DELETE' });
    setAllFoxes((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      {user ? (
        <>
          <FoxForm setAllFoxes={setAllFoxes} />
          <div className="row d-flex justify-content-center">
            {allFoxes?.map((el) => <OneFox key={el.id} fox={el} deleteHandler={deleteHandler} />)}
          </div>
        </>
      ) : 'Товарищ песец, залогиньтесь!'}
    </div>
  );
}
