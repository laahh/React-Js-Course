import React from "react";
function TabButton({ children,onSelected }) {
  
  return (
    <li>
      <button onClick={onSelected}>{children}</button>
    </li>
  );
}

export default TabButton;
