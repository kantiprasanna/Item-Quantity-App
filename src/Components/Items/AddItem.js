import React from 'react';

const AddItem = (props) => {
    const addItemHandler = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={addItemHandler}>
            <label htmlFor="itemname">Item Name</label>
            <input id="itemname" type="text"/>
            <label htmlFor="quantity">Quantity</label>
            <input id="quantity" type="number"/>
            <button type="submit">Add Item</button>
        </form>
    );
};


export default AddItem;
