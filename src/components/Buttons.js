import React from 'react'
import "../App.css";
import categories from '../data/categories';
const Buttons = () => {
  return (
  <>
    {
      categories.map(cat => (
        <button type="button" className="btn btn-outline-dark m-1 " key={cat.id}>
          {cat.title}
        </button>
        ))
    }
  </>
  );
}

export default Buttons
