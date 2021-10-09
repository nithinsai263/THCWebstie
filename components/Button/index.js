import React from "react";
import Text from "../Text";
import Image from "next/image";

export default function Button(props) {
  const getStyles = () => {
    return {
      height: props.height ? props.height : "40px",
      width: props.width ? props.width : "",
      margin: props.margin ? props.margin : "0px",
      backgroundColor: props.backgroundColor ? props.backgroundColor : "",
      boxShadow: props.boxShadow ? props.boxShadow : "",
      padding: props.padding ? props.padding : "0px",
      border: props.border ? props.border : "",
      borderRadius: props.borderRadius ? props.borderRadius : "2px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    };
  };
  if (props.img) {
    return (
      <div style={getStyles()}>
        <div style={{ paddingRight: "8px" }}>
          <Image src={`/${props.img}.png`} height={"18px"} width={"18px"} />
        </div>
        <Text text={props.name} classStyle={props.classStyle} />
      </div>
    );
  } else {
    return (
      <div style={getStyles()} onClick={props.onClick}>
        <Text text={props.name} classStyle={props.classStyle} />
      </div>
    );
  }
}
