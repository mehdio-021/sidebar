import React from "react";
import { FaBars } from "react-icons/fa";
import  {AppContext} from "./context"
import { useGlobalContext } from "./context";

const Home = () => {
  /*  const data =  useContext(AppContext) */
  const {openSidebar} = useGlobalContext();
  /* console.log(data); */
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
    </main>
  );
};

export default Home;
