import React, { createContext, useState } from "react";

export const MyContext = createContext();

function Context(props) {
  const [menu, setMenu] = useState('right-[-100%]')
  return <MyContext.Provider value={{ menu, setMenu}}>{props.children}</MyContext.Provider>;
}

export default Context;
