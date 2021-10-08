import React, { useState, useEffect } from "react";
import { Storage } from "aws-amplify";

export default function CheckoutCartItem({title, size, price, falseprice, picture}) {
  const [image, setImage] = useState();

  useEffect(() => {
    if (picture) {
      getImage(picture.name);
    }
  }, []);

  const getImage = async (pi) => {
    Storage.get(pi).then((res) => {
      setImage(res);
    });
  };
    return (
       <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          borderBottom: "1px solid #ddd",
          paddingBottom: 20,
          fontFamily:'Inter'
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
          <img src={picture? image :"/tshirt.png"} 
            style={{
                height: 80,
                width: 80,
                borderRadius: "8px",
            }}/>
          </div>
          <div style={{ marginLeft: 15 }}>
            <h5 style={{ color: "#000", margin: 0 }}>{title}</h5>
            <p style={{ color: "#555", margin: 0 }}>X- Large</p>
          </div>
        </div>
        <div style={{display:'flex', alignItems:"center"}}>
            <h4 style={{ color: "#000", marginLeft: 20, marginRight:10 }}>₹ {price}</h4>
            <h5 style={{ color: "#555", textDecoration:'line-through'  }}>₹ {falseprice}</h5>
        </div>
      </div>
    )
}
