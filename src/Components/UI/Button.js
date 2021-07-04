import React from "react";

import classes from './Button.Module.css';

const Button = (props) => {
  return (
      <button className={classes.button} type={props.type || 'Add Item'} onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;
