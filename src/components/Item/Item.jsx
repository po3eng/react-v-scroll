import React from "react";
import classes from "./Item.module.css";

const Item = ({ name, id }) => {
  return (
    <div className={classes.virtual_item} key={id}>
      <div> {name}</div>
    </div>
  );
};
export default Item;
