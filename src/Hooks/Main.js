import React, { useContext } from "react";
import GlobalContextProvider from "./GlobalContext";
import Props from "./Props";
import UseGlobalContext from "./UseGlobalContext";

const Main = () => {
  return (
    <>
      <Props text={"hello"} user={"Sandeep"}></Props>
      {/* Props Here is Component */}

      {/* This sends {text} with value "hello" to and {user} = "Sandeep" are the custom user defined properties */}

      {/* Everytime Context IS Called, These Following Should Be Called */}
      <GlobalContextProvider>
        {/* <UseGlobalContext></UseGlobalContext> */}
        <UseGlobalContext />
        {/* This UseGlobalContext is just a component like any other components */}
        {/* Generally, we use MyRoutes <MyRoutes></MyRoutes> Here as it will leave an opportunity for all to use global context */}
      </GlobalContextProvider>
    </>
  );
};

export default Main;
