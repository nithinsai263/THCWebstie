import React from "react";
import Text from "../Text";

export default function FooterComponent(props) {
  return (
    <div>
      {props.item.map((item, index) => {
        if (index === 0) {
          return <Text key={index} text={item} classStyle={"huemntextheading"} />;
        }
        return <Text key={index} text={item} link={true} classStyle={"textlist"} />;
      })}
    </div>
  );
}
