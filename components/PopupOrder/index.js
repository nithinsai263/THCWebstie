import React, { useState, useEffect } from "react";
import { Storage } from "aws-amplify";

export default function PopupOrder({
  name,
  size,
  price,
  quantity,
  picture,
  user,
  flag,
  setIssueOrderItems,
  id
}) {
  const [background, setBackground] = useState(false);
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

  const ChangeBackground = () => {
    if (flag) {
      setBackground(!background);
    }
  };
  return (
    <>
      {!user && (
        <div>
          <div
            onClick={ChangeBackground}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
              backgroundColor: background ? "#aaa" : "#eee",
              marginBottom: 5,
              marginTop: 5,
              transition: "all 0.5s ease",
              cursor: flag ? "pointer" : "",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
               src={picture ? image : "/tshirt.png"}
                style={{ height: 100, width: 100 }}
              />
              <div style={{ padding: 10 }}>
                <p>{name}</p>
                <p>{size}</p>
              </div>
            </div>
            <p>{quantity} x ₹ {price}</p>
          </div>
        </div>
      )}
      {user && (
        <div>
          <div
            onClick={()=>{
              ChangeBackground();
              setIssueOrderItems(prevState => [...prevState, id]);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
              backgroundColor: background ? "#333" : "#111",
              marginBottom: 5,
              marginTop: 5,
              transition: "all 0.5s ease",
              cursor: flag ? "pointer" : "",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
               src={picture ? image : "/tshirt.png"}
                style={{ height: 100, width: 100 }}
              />
              <div style={{ padding: 10 }}>
                <p>Sweat Shirt</p>
                <p>Sexy Noice</p>
              </div>
            </div>
            <p>₹ 600</p>
          </div>
        </div>
      )}
    </>
  );
}
