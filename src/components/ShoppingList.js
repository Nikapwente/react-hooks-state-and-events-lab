import React, {useState} from "react";
import Item from "./Item";
import { isElement } from "react-dom/test-utils";

function ShoppingList({ items }) {

  

 
  const [displayCategory,updateCategory] = useState(items);

  function handleSelect(event) {
    console.log(event.target.value);
    if (event.target.value !=="All") {
      const selectedCategory = items.filter((item)=>item.category==event.target.value)
      updateCategory(selectedCategory);
    } else if (event.target.value ==="All") {
      updateCategory(items);
    }
    
    
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelect} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        
        {displayCategory.map((item) => (
          

          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );

}

export default ShoppingList;
