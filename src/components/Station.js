import React from "react";
import "../styles.css";
import Platform from "./Platform";

export default function Station() {
  return (
    <>
      <main>
        <div className="main-container">
          <Platform name="a1"/>
          <Platform name="a2"/>
          <Platform name="a3"/>
        </div>
        <div className="main-container">
          <Platform name="b1"/>
          <Platform name="b2"/>
          <Platform name="b3"/>
        </div>
        <div className="main-container">
          <Platform name="c1"/>
          <Platform name="c2"/>
          <Platform name="c3"/>
        </div>
        <div className="main-container">
          <Platform name="d1"/>
          <Platform name="d2"/>
          <Platform name="d3"/>
        </div>
      </main>
    </>
  );
}
