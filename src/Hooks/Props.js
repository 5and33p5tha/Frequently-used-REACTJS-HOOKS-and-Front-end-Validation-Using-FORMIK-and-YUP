//This Page is for using Main.js

//PROPS ARE MOSTLY USED TO GET VALUES (VALUES FROM FORM, VALUES FROM URL)

import React from "react";

const Props = (props) => {
  //Insteas of (props), we can write (anyname), props here is just globally used and understood common term
  const { text, user } = props;
  //The method is called a De-structuring Object.
  //If De-Structuring was not used, we have to to the following
  //props.text and props.user

  return (
    <>
      <h1> {text}</h1> Sent By <h2> {user} </h2>
      {/* If the de-structuring was not used, we have to write the following for above code */}
      {/* <h1> {props.text}</h1> Sent By <h2> {props.user} </h2> */}
      {/* The {text} and {user} is our custom defined hooks sent by main.js */}
      {/* 
            IF WE WERE NOT USING DE-STRUCTURING, thenTHE ABOVE LINE
                
                const { text, user } = props SHOULD BE COMMENTED AND

                <h1> {props.text}</h1> Sent By <h2> {props.user} </h2> Should be written inplace of {text} and {user} */}
    </>
  );
};

export default Props;

// const Props = (props) => { THIS IS UNNAMED METHOD.
//FOR THIS, WE HAVE TO DO PROPS.something eg:- props.text, props.name

// const Props = ({name}) => { THIS IS NAMED METHOD.
//FOR THIS, WE HAVE TO DO name
//const Props = ({name, address})
