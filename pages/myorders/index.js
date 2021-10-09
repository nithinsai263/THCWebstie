import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import { API, Auth, graphqlOperation, Storage, Hub } from "aws-amplify";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OrderCard from "../../components/OrderCard";
import styles from "./index.module.css";
import {getUser} from "../../src/graphql/queries";

export default function MyOrders({ history }) {
  const [allorders, setAllorders] = useState(true);
  const [returnedorders, setReturnedorders] = useState(false);
  const [userData, setUserData] = useState("");
  const [issueorders, setIssueOrders]=useState();

  useEffect(() => {
    async function  fetchingOrders() { 
      let user = await Auth.currentAuthenticatedUser();
      const userid = user.attributes.sub;

      const userdata = await API.graphql(
        graphqlOperation(getUser, { id: userid })
      );
      setUserData(userdata.data.getUser);
      console.log(userdata.data.getUser.orders);
      //need to fix issue order
      setIssueOrders(userdata.data.getUser.orders.items.map(or=>or.list.items.filter(orr=>orr.issue!==null)))
      console.log("wassap:", userdata.data.getUser.orders.items.map(or=>or.list.items.filter(orr=>orr.issue===null)));
    }
    fetchingOrders();
  }, [])
if(issueorders){
  console.log(issueorders[0])
}

  return (
    <>
      <Navbar />
      <div className={styles.thcmyordersmaincontainer}>
        <MediaQuery minWidth={750}>
          <div className={styles.thcmyorderswrapper}>
            <div>
              <div
                onClick={() => {
                  setAllorders(true);
                  setReturnedorders(false);
                }}
                className={styles.thcmyorderlabels}
              >
                <p
                  className={
                    allorders
                      ? styles.thcmyordersactivelabel
                      : styles.thcmyorderspassivelabel
                  }
                >
                  All Orders
                </p>
              </div>
              <div
                onClick={() => {
                  setReturnedorders(true);
                  setAllorders(false);
                }}
                className={styles.thcmyorderlabels}
              >
                <p
                  className={
                    returnedorders
                      ? styles.thcmyordersactivelabel
                      : styles.thcmyorderspassivelabel
                  }
                >
                  Returned Orders
                </p>
              </div>
            </div>

            {allorders && (
              <div className={styles.thcordercardcontainer}>
                <div className={styles.thcordercardwrapper}>
                {userData && userData.orders.items.map((o, index)=>(
                  <OrderCard key={index} date={o.createdAt} total={o.billdata.total} address={o.shipaddress.address} orderid={o.id} quantity={o.list.items.length} subtotal={o.billdata.subTotal}/>
                ))}
                </div>
              </div>
            )}
            {returnedorders && (
              <div className={styles.thcordercardcontainer}>
                <div className={styles.thcordercardwrapper}>
                {issueorders  && issueorders[0]!==[]&& issueorders.map((o, index)=>(
                  <OrderCard key={index} date={o.createdAt} total={o.billdata.total} address={o.shipaddress.address} orderid={o.id} quantity={o.list.items.length} subtotal={o.billdata.subTotal}/>
                ))}
                </div>
              </div>
            )}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={750}>
          <div
            style={{
              backgroundColor: "#000",
              display: "flex",
              color: "#fff",
              padding: "15px ",
            }}
          >
            <div
              onClick={() => {
                  setAllorders(true);
                  setReturnedorders(false);
              }}
              style={{
                marginRight: "20px",
                cursor: "pointer",
                paddingBottom: "2px",
                borderBottom: "1px solid #eee",
              }}
            >
               <p
                  className={
                    allorders
                      ? styles.thcmyordersactivelabel
                      : styles.thcmyorderspassivelabel
                  }
                >
                  All Orders
                </p>
            </div>
            <div
              onClick={() => {
                setAllorders(false);
                setReturnedorders(true);
              }}
              style={{
                marginRight: "20px",
                cursor: "pointer",
                paddingBottom: "2px",
                borderBottom: "1px solid #eee",
              }}
            >
                <p
                  className={
                    returnedorders
                      ? styles.thcmyordersactivelabel
                      : styles.thcmyorderspassivelabel
                  }
                >
                  Returned Orders
                </p>
            </div>
          </div>
          <div>
              {allorders && (
              <div className={styles.thcordercardcontainer}>
                <div className={styles.thcordercardwrapper}>
                {userData && userData.orders.items.map((o, index)=>(
                  <OrderCard key={index} date={o.createdAt} total={o.billdata.total} address={o.shipaddress.address} orderid={o.id} quantity={o.list.items.length} subtotal={o.billdata.subTotal}/>
                ))}
                </div>
              </div>
            )}
            {returnedorders && (
              <div className={styles.thcordercardcontainer}>
                <div className={styles.thcordercardwrapper}>
                {userData && (userData.orders.items.map(or=>or.list.items.filter(orr=>orr.issue!==null))).orders.items.map((o, index)=>(
                  <OrderCard key={index} date={o.createdAt} total={o.billdata.total} address={o.shipaddress.address} orderid={o.id} quantity={o.list.items.length} subtotal={o.billdata.subTotal}/>
                ))}
                </div>
              </div>
            )}
          </div>
        </MediaQuery>
      </div>
      <Footer />
    </>
  );
}
