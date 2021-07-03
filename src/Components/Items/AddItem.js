import React from 'react';

import Card from '../UI/Card';
import classes from './Items.Module.css';

const AddItem = (props) => {
    const addItemHandler = (event) => {
        event.preventDefault();
    };
    return (
        <Card className={classes.input}>
            <form onSubmit={addItemHandler}>
                <label htmlFor="itemname">Item Name</label>
                <input id="itemname" type="text"/>
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type="number"/>
                <button type="submit">Add Item</button>
            </form>
        </Card>

    );
};


export default AddItem;
