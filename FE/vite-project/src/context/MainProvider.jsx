import React, { createContext, useState } from "react";

export const MainContext = createContext();
function MainProvider({ children }) {
  const [basket, setbasket] = useState([]);
  const [wish, setwish] = useState([])
  function addBasket(item) {
    setbasket([...basket, item]);
  }
  function addWish(item) {
    setwish([...wish,item])
    
  }
  return (
    <>
      <MainContext.Provider value={{ addBasket, basket, setbasket ,addWish,wish,setwish}}>
        {children}
      </MainContext.Provider>
    </>
  );
}

export default MainProvider;
