import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './Items.Module.css';
import ErrorModal from "../UI/ErrorModal";

const AddItem = (props) => {
    const [enteredItemName, setEnteredItemName] = useState('');
    const [enteredQuantity, setEnteredQuantity] = useState('');
    const [error, setError] = useState();

    const addItemHandler = (event) => {
        event.preventDefault();
        if(enteredItemName.trim().length === 0 || enteredQuantity.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid item name and quantity(non empty values).'
            });
            return;
        }
        if(+enteredQuantity < 1){
            setError({
                title: 'Invalid quantity',
                message: 'Please enter a valid quantity(greater than 0).'
            });
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

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
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
