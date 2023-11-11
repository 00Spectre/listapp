import React from 'react';

const ShoppingList = ({ name, owner, items, onAddItem }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Owner: {owner}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => onAddItem()}>Add item</button>
    </div>
  );
};

export default ShoppingList;