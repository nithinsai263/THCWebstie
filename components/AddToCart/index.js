import React, { useState, useEffect } from "react";
import { API, Auth, graphqlOperation, Storage, Hub } from "aws-amplify";

import {getUser} from "../../src/graphql/queries"
import * as mutations from "../../src/graphql/mutations"
import styles from "./index.module.css";

export default function AddToCart({productid, productsize}) {
  const [userData, setUserData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
      async function fetchingCartItems(){
         try {
          let user = await Auth.currentAuthenticatedUser();
          const userid = user.attributes.sub;
          const userdata = await API.graphql(
            graphqlOperation(getUser, { id: userid })
          );
          setUserData(userdata.data.getUser);

          const index = userdata.data.getUser.cart.items.findIndex((item) => item.product.id === productid);
          if(index!==-1){
            setCount(userdata.data.getUser.cart.items[index].quantity);
          }
         }catch(e){
           setUserData(null);
         }
      }
    fetchingCartItems();
  }, [])

  const add = async()=>{
    if(productsize!==null){
    setCount(count+1);
    let user = await Auth.currentAuthenticatedUser();
    let temp = {
      userID: user.attributes.sub,
      quantity: 1,
      size:productsize,
      cartItemProductId: productid,
      };
      const cartitemdata = await API.graphql(
        graphqlOperation(mutations.createCartItem, {
          input: temp,
        })
      );
    }
    else{
      alert('Please select size first')
    }
  }

  const increment = async()=>{
     setCount(count+1);
     const index = userData.cart.items.findIndex((item) => item.product.id === productid);
     let temp = {
        id: userData.cart.items[index].id,
        quantity: userData.cart.items[index].quantity+1,
        size:productsize, 
      };

      const cartitemdata = await API.graphql(
        graphqlOperation(mutations.updateCartItem, { input: temp })
      );
      console.log(cartitemdata)
  }

  const decrement = async()=>{
      count > 0 ? setCount(count - 1) : setCount(0);
      const index = userData.cart.items.findIndex((item) => item.product.id === productid);

      if(userData.cart.items[index].quantity>1){
        let temp = {
          id: userData.cart.items[index].id,
          quantity: userData.cart.items[index].quantity-1,
          size:productsize,
        };
        const cartitemdata = await API.graphql(
          graphqlOperation(mutations.updateCartItem, { input: temp })
        );
      }
      else{
        alert('deleting shit')
        let temp={
          id: userData.cart.items[index].id,
        };
         const cartitemdata = await API.graphql(
          graphqlOperation(mutations.deleteCartItem, { input: temp })
        );
        console.log(cartitemdata);
      }

  }

  return (
    <div className={styles.thehomiecompanyAddtocart}>
    {count!==0 &&
      <div
        onClick={() => {
        decrement();
        }}
        className={styles.thehomiecompanyquantity}
      >
        -
      </div>
    }
      <div className={styles.thehomiecompanycartbutton}  onClick={() => {
             add();
            }}>
        {count === 0 && (
          <h2
            className={styles.thcaddtocarttext}
          >
            Add to Cart
          </h2>
        )}
        {count !== 0 && <h2>{count}</h2>}
      </div>
    {count!==0 &&
      <div
        onClick={() => {
         increment();
        }}
        className={styles.thehomiecompanyquantity}
      >
        +
      </div>
      }
    </div>
  );
}
