import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './Items.Module.css';

const AddItem = (props) => {
    const [enteredItemName, setEnteredItemName] = useState('');
    const [enteredQuantity, setEnteredQuantity] = useState('');

    const addItemHandler = (event) => {
        event.preventDefault();
        console.log(enteredItemName, enteredQuantity);
    };

    const itemNameChangeHandler = (event) => {
        setEnteredItemName(event.target.value);
    };

    const quantityChangeHandler = (event) => {
        setEnteredQuantity(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addItemHandler}>
                <label htmlFor="itemname">Item Name</label>
                <input id="itemname" type="text" onChange={itemNameChangeHandler}/>
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type="number" onChange={quantityChangeHandler}/>
                <Button type="submit">Add Item</Button>
            </form>
        </Card>

    );
};


export default AddItem;
