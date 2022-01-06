import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //by default, if you have no dependancy array => the useEffect will re-run every time the component gets re-rendered
  useEffect(() => {
    console.log("call useEffect 1");
  });

  //if you set up the dependancy array as empty array => the useEffect will run only once the component is rendered
  useEffect(() => {
    console.log("call useEffect 2");
  }, []);

  //if you add different values in the dependancy array => the useEffect will run each time that value is changed
  useEffect(() => {
    console.log("call useEffect 3");
  }, [value]);

  // Also -> You can setup many useEffect, all above 3 will work
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
