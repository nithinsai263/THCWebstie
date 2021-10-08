import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaCartArrowDown, FaTimes } from "react-icons/fa";
import MediaQuery from "react-responsive";
import { API, Auth, graphqlOperation } from "aws-amplify";

import {getUser} from "../../src/graphql/queries"
import CartCard from "./CartCard";
import styles from "./index.module.css";


export default function Cart() {
  const [cart, setCart] = useState(false);
  const [header, setHeader] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    setTimeout = () => {
      setHeader(true);
    };
  });
  
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
    <div className={styles.thccartmaindiv}>
      <div
        onClick={() => {
          setCart(!cart);
        }}
        className={styles.thcarticoncontainer}
      >
        <FaCartArrowDown color={"#fff"} size={30} />
      </div>
      {cart && (
        <div
          className={
            cart
              ? styles.thehomiecompanyCartContainer
              : styles.thehomiecompanyCartContainerHide
          }
        >
          <div
            className={
              header
                ? styles.cartHeaderContainer
                : styles.cartHeaderContainerHide
            }
          >
            <h2>The Homie Company</h2>
            <FaTimes
              size={20}
              color={"#fff"}
              onClick={() => {
                setCart(false);
              }}
              style={{
                position: "fixed",
                top: 3,
                right: 3,
                cursor: "pointer",
                zIndex: 999,
              }}
            />
          </div>

          <div className={styles.cartCardHolder}>
            {userData && userData.cart.items.map((prod)=>(
              <>
              <CartCard prodid={prod.product.id} picture={prod.product.picture.items[0]} title={prod.product.name} subtitle={prod.product.description} price={prod.product.price} falseprice={prod.product.falseprice}/>
              </>
            ))}
          </div>
          <Link href={"/checkout"}>
            <div className={styles.cartcontainercheckoutbutton}>
              <h2>Proceed to Checkout</h2>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
