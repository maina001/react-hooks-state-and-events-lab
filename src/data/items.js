import React, { useState } from "react";

function Item({ name, category }) {
// use state to keep track of whether the item is in the cart or not
const [inCart, setInCart] = useState(false);

function handleClick() {
// toggle the inCart state
setInCart(!inCart);
}

const itemClass = inCart ? "in-cart" : "";
const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

return (
<li className={itemClass}>
<span>{name}</span>
<span className="category">{category}</span>
<button className="add" onClick={handleClick} >
{buttonText}
</button>
</li>
);
}

export default Item;