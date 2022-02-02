import React,{useState} from "react";
import Item from "./Item";

  function ShoppingList({ items }) {

    const [selectedCategory, setSelectedCategory] = useState("")
  
  
    const handleFilterCategory = (e) =>{
      setSelectedCategory(e.target.value);
  
    }

    const searchResults = items.filter((item) => {
     return ( selectedCategory === "ALL" ? true : item.category.includes(selectedCategory))
    })
  
 
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={handleFilterCategory} > 
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div> 
        <ul className="Items">
          {searchResults.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
              
        
        </ul>
      </div>
    );
  }
  
  
  
  
  
  
  export default ShoppingList;