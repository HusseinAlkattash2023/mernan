import React, { createContext , useState } from "react";

export const StateContext = createContext();

const StateProvider = ({children}) => {

    //** this is state to change side rtl and ltr */
  const [ changeSide , setChangeSide ] = useState(localStorage.getItem("i18nextLng"))

  return (
    <StateContext.Provider value={{changeSide , setChangeSide}}>
        {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
