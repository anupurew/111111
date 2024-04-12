import React from "react";
import { useState } from "react";

export default function HnadlerEx() {
  const [msg, setMsg] = useState("Hello World!");
  const msgToChange = () => {
    setMsg("Goodbye World!");
  };

  return (
    <>
      <h2>{msg}</h2>
      <button onClick={msgToChange}>클릭</button>
    </>
  );
}
