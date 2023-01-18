import React, {useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

  function App() {
    // create a state variable to hold the current theme
    const [theme, setTheme] = useState("light");
    
    // update the theme state when the button is clicked
    function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
    }
    
    // use the theme state to determine the class name for the app
    const appClass = theme === "light" ? "App light" : "App dark";

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App
