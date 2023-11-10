import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, changeLight] = useState("App light");

  function handleClick() {
    if (appClass==="App light") {
      changeLight((inLight)=>"App dark"); 
    } else if (appClass==="App dark") {
      changeLight((inLight)=>"App light"); 
    }
  }
  
  // const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{(appClass==="App dark")? "Dark Mode":"Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
