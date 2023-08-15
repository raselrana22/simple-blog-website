//The client site component

"use client";

import React, { useState } from "react";

export default function Button() {
  const [textColor, setTextColor] = useState("black");

  const changeTextColor = () => {
    setTextColor(textColor === "black" ? "red" : "black");
  };

  return (
    <div>
      <p className='mx-2' style={{ color: textColor }}>
        Love
      </p>
      <button
        className='my-2 border border-black rounded px-2 hover:scale-105'
        onClick={changeTextColor}
      >
        Like
      </button>
    </div>
  );
}
