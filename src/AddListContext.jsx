import { createContext, useState } from "react";

const AddListContext = createContext();

export function ListProvider({ children }) {
  const [items, setItems] = useState([]);

  const addListItems = item => {
    console.log("Adding item:", item);
    setItems(prevItems => [...prevItems, item]);
  };

  return (
    <AddListContext.Provider value={{ items, addListItems, setItems }}>
      {children}
    </AddListContext.Provider>
  );
}

export default AddListContext;
