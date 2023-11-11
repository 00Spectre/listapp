import React, { useState } from 'react';
import ShoppingLists from './components/ShoppingLists';
import ShoppingList from './components/ShoppingList';

const App = () => {
  const [shoppingLists, setShoppingLists] = useState([
    { id: 1, name: 'Shopping List 1', owner: 'Member 1', items: [] },
    { id: 2, name: 'Shopping List 2', owner: 'Member 2', items: [] },
    { id: 3, name: 'Shopping List 3', owner: 'Member 3', items: [] },
  ]);

  const [selectedList, setSelectedList] = useState(null);
  const [newListName, setNewListName] = useState('');
  const [creatingList, setCreatingList] = useState(false);

  const handleListClick = (listId) => {
    const selected = shoppingLists.find((list) => list.id === listId);
    setSelectedList(selected);
  };

  const handleDeleteList = (listId) => {
    const updatedLists = shoppingLists.filter((list) => list.id !== listId);
    setShoppingLists(updatedLists);
  };

  const handleAddItem = () => {
    if (selectedList) {
      const itemName = window.prompt('Enter the name of the item:');
      if (itemName) {
        const newItem = { id: selectedList.items.length + 1, name: itemName, resolved: false };
        const updatedList = { ...selectedList, items: [...selectedList.items, newItem] };
  
        setShoppingLists((prevLists) =>
          prevLists.map((list) => (list.id === selectedList.id ? updatedList : list))
        );
        setSelectedList(updatedList);
      }
    }
  };

  const handleCreateList = () => {
    const newList = {
      id: shoppingLists.length + 1,
      name: newListName,
      owner: 'Current User',
      items: [],
    };

    setShoppingLists([...shoppingLists, newList]);
    setCreatingList(false);
    setNewListName('');
  };

  return (
    <div>
      {creatingList ? (
        <div>
          <input type="text" value={newListName} onChange={(e) => setNewListName(e.target.value)} />
          <button onClick={handleCreateList}>Create</button>
        </div>
      ) : selectedList ? (
        <ShoppingList
          name={selectedList.name}
          owner={selectedList.owner}
          items={selectedList.items}
          onAddItem={handleAddItem}
        />
      ) : (
        <ShoppingLists
          lists={shoppingLists}
          onDelete={handleDeleteList}
          onListClick={handleListClick}
          onCreateList={() => setCreatingList(true)}
        />
      )}
    </div>
  );
};

export default App;