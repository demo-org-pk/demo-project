import React, { useEffect } from 'react';

const ItemList = () => {
  useEffect(() => {
    addItemsToPage();
  }, []);

  const addItemsToPage = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const list = document.getElementById('item-list');

    for (let i = 0; i < items.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = items[i];
      list.appendChild(listItem);
    }
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul id="item-list">
        {/* Add a comment here to explain why there is an empty <li> */}
        {/* The empty <li> was added to the list by mistake, so we are removing it */}
        <li style={{ display: 'none' }}></li>
      </ul>
    </div>
  );
};

export default ItemList;