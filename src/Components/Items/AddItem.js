import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './Items.Module.css';
import ErrorModal from "../UI/ErrorModal";

const AddItem = (props) => {
    const [enteredItemName, setEnteredItemName] = useState('');
    const [enteredQuantity, setEnteredQuantity] = useState('');

    const addItemHandler = (event) => {
        event.preventDefault();
        if(enteredItemName.trim().length === 0 || enteredQuantity.trim().length === 0){
            return;
        }
        if(+enteredQuantity < 1){
            return;
        }
        props.onAddItem(enteredItemName, enteredQuantity);
        setEnteredItemName('');
        setEnteredQuantity('');
    };

    const itemNameChangeHandler = (event) => {
        setEnteredItemName(event.target.value);
    };

    const quantityChangeHandler = (event) => {
        setEnteredQuantity(event.target.value);
    };

    return (
        <div>
            <ErrorModal title="An Error Occured" message="Something went wrong"></ErrorModal>
            <Card className={classes.input}>
                <form onSubmit={addItemHandler}>
                    <label htmlFor="itemname">Item Name</label>
                    <input id="itemname" type="text" value={enteredItemName} onChange={itemNameChangeHandler}/>
                    <label htmlFor="quantity">Quantity</label>
                    <input id="quantity" type="number" value={enteredQuantity} onChange={quantityChangeHandler}/>
                    <Button type="submit">Add Item</Button>
                </form>
            </Card>
        </div>
    );
};


export default AddItem;
