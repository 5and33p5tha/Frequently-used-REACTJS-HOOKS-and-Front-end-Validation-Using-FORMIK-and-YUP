//Here, it is a little different from normal rafce or rafe

//Global context is mostly used to create themes.
// Like change FontFaceSet,
// make new colors for particular SpeechRecognitionResult, etc
import React, { createContext } from "react";

export const GlobalContext = createContext(); //This is a variable.    createContext is a built is react hooks Function

//This requires curly braces everytime we are importing it.

const GlobalContextProvider = (props) => {
  //This is a function, Here Props is a paramenter and can be named anything.
  //This is created to bind the following two functions
  return (
    <GlobalContext.Provider value={"Hello, This is from Global Context"}>
      {/* Here, Global Context is our created context and .PROVIDER is its function. */}

      {/* FOR USING .PROVIDER, IT MUST BE BIND BY GlobalContextProvider  */}

      {/* //The  value is a syntax */}
      {/* GlobalContext is our user defined variable. and .PROVIDER IS A BUILT IN REACT HOOKS FUNCTION */}

      {props.children}
      {/* props.children is for any component that uses or will use global context */}
      {/* This is for everything that props holds. For everything  inside props*/}
      {/* This is also a react hooks function */}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
//Note, we can only use one export default.

//Generally, globalContext Wraps My Routes, Global Context  is then wrapped inside App.js and this App.js is called in index.js
//i.e
//App.js -> rafce = {
//<globalcontext>
//<MyRoutes>
//<Pages...>
//</MyRoutes>
// </globalcontext>
// }
//and, call app.js in index.js i.e
//index.js -> rafce = {
// app.js
// }
