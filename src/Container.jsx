import React, { useState } from "react";
import "./Container.css";

function Container() {
  const [color, setColor] = useState("in Hash");

  const changeColor = () => {
    setColor(document.querySelector("input").value);
    document.getElementById("maindiv").style.backgroundColor = `${color}`;
  };

  const copyColor = () => {
    navigator.clipboard.writeText(color).then(() => {
      alert("Copied to clipboard: " + color);
    });
  };

  return (
    <div id="container">
      <div id="maindiv">
        <p
          className="p"
          style={{ color: `${color === "#ffffff" ? "black" : "white"}` }}
        >
          Color is: {color}
          <svg
            onClick={() => copyColor()}
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill={color === "#ffffff" ? "black" : "white"}
          >
            <path d="M360-240q-29.7 0-50.85-21.15Q288-282.3 288-312v-480q0-29.7 21.15-50.85Q330.3-864 360-864h384q29.7 0 50.85 21.15Q816-821.7 816-792v480q0 29.7-21.15 50.85Q773.7-240 744-240H360Zm0-72h384v-480H360v480ZM216-96q-29.7 0-50.85-21.15Q144-138.3 144-168v-552h72v552h456v72H216Zm144-216v-480 480Z" />
          </svg>
        </p>
      </div>
      <button>
        {" "}
        Change
        <input
          className="input"
          type="color"
          onChange={() => changeColor()}
        ></input>
      </button>
    </div>
  );
}

export default Container;
