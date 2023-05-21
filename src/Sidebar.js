import React from "react";
/* import data from "./data"; */
import { links } from "./data";
import google from "./google.png";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {

  const {isOpenSidebar ,closeSidebar} = useGlobalContext()

  
  return (
    <aside className={isOpenSidebar?"sidebar show-sidebar" :"sidebar" }>
      <div className="sidebar-header">
        <img className="logo" src={google}/>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { text, id, icon, url } = link;
          return (
            <li key={id}>
                
              <a href={url}>{icon}{text}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
