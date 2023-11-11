import React from 'react';

const ShoppingLists = ({ lists, onDelete, onListClick, onCreateList }) => {
  return (
    <div>
      <h2>Shopping lists</h2>
      {lists.map((list) => (
        <div key={list.id} onClick={() => onListClick(list.id)}>
          {list.name} <button onClick={() => onDelete(list.id)}>Open</button>
        </div>
      ))}
      <button onClick={onCreateList}>Create new shopping list</button>
    </div>
  );
};

export default ShoppingList