import React, {useState, useEffect} from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import {getUser} from "../../src/graphql/queries"

import Button from "../Button";
import styles from "./index.module.css";
import Total from "./total";
import CheckoutCartItem from "./CheckoutCartItem";

export default function CheckoutCard({currbill, couponChecker}) {
  const [userData, setUserData] = useState();
  const [couponname, setCouponName]=useState(null);

  useEffect(() => {
    async function fetchcartitems() {
      let user = await Auth.currentAuthenticatedUser();
      const userid = user.attributes.sub;
      console.log(userid)
      const userdata = await API.graphql(
        graphqlOperation(getUser, { id: userid })
      );
      setUserData(userdata.data.getUser);
    }
    fetchcartitems();
  },[]);

  

  return (
    <div style={{}}>
      {userData && userData.cart.items.map((prod)=>(
        <>
          <CheckoutCartItem picture={prod.product.picture.items[0]} title={prod.product.name}  price={prod.product.price} falseprice={prod.product.falseprice}/>
        </>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          borderBottom: "1px solid #ddd",
          paddingBottom: 20,
          paddingTop: 20,
        }}
      >
        <input
          placeholder="Enter Coupon"
          style={{ width: "100%", height: 35, marginRight: 10 }}
          value={couponname}
          onChange={(e)=>{setCouponName(e.target.value)}}
        />
        <div onClick={()=> {couponChecker(couponname)}}>
          <Button
            name={"Apply"}
            backgroundColor={"gray"}
            width={"80px"}
            height={"40px"}
          />
        </div>
      </div>
      <Total currbill={currbill}/>
    </div>
  );
}
