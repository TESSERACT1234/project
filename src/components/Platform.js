import React from 'react';
import "../styles.css";

export default function Platform(props) {
  return (
    <>
        <div className="container">
            <div className="card center">
                <div className="front  center">
                    <p>{props.name}</p>
                </div>
                <div className="back center">
                    <p className="text-center fonts">
                        <a href="/a1.ejs" className="fonts">
                            {" "}
                            Click here to see plates of this junction{" "}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
