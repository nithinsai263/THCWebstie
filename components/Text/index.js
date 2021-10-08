import React from "react";
import styles from "./index.module.css";

export default function Text(props) {
  const getclass = () => {
    return styles[props.classStyle];
  };
  if (props.link) {
    return (
      <p className={getclass()}>
        <a
          style={{ textDecoration: "none", cursor: "pointer" }}
          href={props.link2 ? props.link2 : ""}
        >
          {props.text}
        </a>
      </p>
    );
  } else if (props.list) {
    return <li className={getclass()}>{props.text}</li>;
  } else {
    return <p className={getclass()}>{props.text}</p>;
  }
}
