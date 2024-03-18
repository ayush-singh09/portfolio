import React, { createContext, useState } from "react";

export const MyContext = createContext();

function Context(props) {
  const [data, setData] = useState([
    {
      name: "Ayush Singh",
      age: 19,
      contact: 8317070867,
    },
  ]);
  const [menu, setMenu] = useState('-100%')
  return <MyContext.Provider value={{data, menu, setMenu}}>{props.children}</MyContext.Provider>;
}

export default Context;
