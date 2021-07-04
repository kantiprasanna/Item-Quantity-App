import './App.css';
import React, { useState } from 'react';
import AddItem from './components/Items/AddItem'
import ItemsList from "./components/Items/ItemsList";


function App() {
    const [itemsList, setItemsList] = useState([]);

    const addItemHandler = (iName, iQuantity) => {
      setItemsList((prevItemsList) => {
        return [...prevItemsList, {name: iName, quantity: iQuantity, id: Math.random().toString()},
        ];
      });
    };

    return (
        <div>
            <AddItem onAddItem={addItemHandler}></AddItem>
            <ItemsList items={itemsList}></ItemsList>
        </div>
    );
}

export default App;
