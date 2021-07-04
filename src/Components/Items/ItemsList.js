import React from "react";

import Card from '../UI/Card'
import classes from './ItemsList.Module.css';

const ItemsList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.items.map((item) => (
                    <li key={item.id}>
                        {item.name} ({item.quantity})
                    </li>
                ))}
            </ul>
        </Card>

    );
};

export default ItemsList;
