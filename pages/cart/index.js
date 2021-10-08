import React, {useEffect, useState} from "react";
import Link from "next/link";
import { API, Auth, graphqlOperation } from "aws-amplify";

import CartCard from "../../components/Cart/CartCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./index.module.css";
import {getUser} from "../../src/graphql/queries"

export default function Index() {
  const [userData, setUserData] = useState();

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
    <>
      <Navbar />
      <div className={styles.thcmobilecartmaincontainer}>
        <h2
          className={styles.thcmobilecartheadertext}
          style={{ textAlign: "center" }}
        >
          The Homie Company
        </h2>
        <div>
        {userData && userData.cart.items.map((prod)=>(
          <>
            {console.log(prod)}
            <CartCard prodid={prod.product.id} picture={prod.product.picture.items[0]} title={prod.product.name} subtitle={prod.product.description} price={prod.product.price} falseprice={600}/>
          </>
        ))}
        </div>
        <Link href={"/checkout"}>
          <div className={styles.thcmobilecartcheckoutcontainer}>
            <h2 className={styles.thcmobilecartcheckouttext}>
              Proceed to Checkout
            </h2>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
}
