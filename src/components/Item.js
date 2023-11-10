import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, changeCartStatus] = useState("");

  function handleClick() {
    if (inCart==="") {
      changeCartStatus((inCart)=>"in-cart"); 
    } else if (inCart==="in-cart") {
      changeCartStatus((inCart)=>""); 
    }
    

  }
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{(inCart==="in-cart")? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
