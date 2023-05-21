import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpenSidebar,setisOpenSidebar] = useState(false);

  const openSidebar = () =>{
    setisOpenSidebar(true)
  }
  const closeSidebar = () =>{
    setisOpenSidebar(false)
  }
  return <AppContext.Provider value={{isOpenSidebar,openSidebar,closeSidebar}}>{children}</AppContext.Provider>;
};


export const useGlobalContext = () =>{
  return useContext(AppContext)
}
export { AppContext, AppProvider };
