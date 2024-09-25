import React from "react";
function TabButton({ children,onSelected,isSelected }) {
  
  return (
    <li>
      <button className={isSelected ? "active" : ""}  onClick={onSelected}>{children}</button>
    </li>
  );
}

export default TabButton;
