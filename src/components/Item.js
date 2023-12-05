import React,{ useState } from "react";


function Item({ name, category }) {

  const [inCart, setInCart] = useState(true);

  const itemClass = inCart ?  "" : "in-cart"
  
  function handleCartClick(){

    return (
      setInCart(!inCart)
    )
  }



  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
