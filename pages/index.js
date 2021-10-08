import { useState, useEffect } from "react";
import _ from "lodash";
import MediaQuery from "react-responsive";
import { API, Auth, graphqlOperation } from "aws-amplify";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./index.module.css";
import Button from "../components/Button";
import Previewcomponent from "../components/Card";
import ParticleJS from "../components/ParticleJS";
import ParticleJSMobile from "../components/ParticleJSMobile";
import Cart from "../components/Cart";
import { listProducts, getUser } from "../src/graphql/queries";
import { updateUser } from "../src/graphql/mutations";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [productdata, setProductData] = useState(null);
  const [productdata2, setProductData2] = useState(null);
  const [curruser, setCurrUser]=useState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const user=await Auth.currentAuthenticatedUser();
        setCurrUser(user);
        const res = await API.graphql(graphqlOperation(listProducts));
        setProducts(res.data.listProducts.items);
        setProductData(_.chunk(res.data.listProducts.items, 3));
        setProductData2(_.chunk(res.data.listProducts.items, 2));
        billGenerator(user.attributes.sub, user.signInUserSession.idToken.jwtToken);
      } catch (e) {
        console.log(e);
        const res = await API.graphql({
          query: listProducts,
          authMode: "AWS_IAM",
        });
        setProducts(res.data.listProducts.items);
        setProductData(_.chunk(res.data.listProducts.items, 3));
        setProductData2(_.chunk(res.data.listProducts.items, 2));
      }
    }

    async function billGenerator(userid, token){
      const userdata = await API.graphql(
        graphqlOperation(getUser, { id: userid })
      );

      if(userdata.data.getUser.bill===null){
        const requestData = {
          headers: {
            Authorization: token,
          }
        };
        const data = await API.get("addbill", "/addbill", requestData);
        console.log('here',data);
        // const updatedUser={
        //   id: userid,
        //   userShipaddressId:res.data.createAddress.id
        // }
        // const userdata = await API.graphql(
        //   graphqlOperation(updateUser, { input: updatedUser})
        // );
      }
    }

    fetchProducts();
 }, []);



  return (
    <div style={{ margin: 0 }}>
      <Navbar />
      <div className={styles.thehomiecompanyHomeContainer}>
        <MediaQuery minWidth={900}>
          <div>
            <ParticleJS />
            <div className={styles.academyLandingContainer}>
              <div className={styles.academyLoginContainer}>
                <h1 className={styles.academyLoginHeader}>The Homie Company</h1>
                <p className={styles.academyLoginText}>
                  Scroll through eternity
                </p>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={900}>
          <div>
            <ParticleJSMobile />
            <div className={styles.academyLandingContainer}>
              <div className={styles.academyLoginContainer}>
                <h1 className={styles.academyLoginHeader}>The Homie Company</h1>
                <p className={styles.academyLoginText}>
                  Scroll through eternity
                </p>
              </div>
            </div>
          </div>
        </MediaQuery>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", fontSize: "24px" }}>PRODUCTS</h1>
        </div>
        <MediaQuery minWidth={900}>
          {productdata &&
            productdata.map((l, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    padding: "20px 0px",
                  }}
                >
                  {l.map((prod) => (
                    <a href={`/items/${prod.id}`} key={prod.id}>
                      <Previewcomponent
                        name={prod.name}
                        description={prod.description}
                        price={prod.price}
                        falseprice={prod.falseprice}
                        picture={prod.picture.items[0]}
                      />
                    </a>
                  ))}
                </div>
              );
            })}
        </MediaQuery>
        <MediaQuery maxWidth={900}>
          {productdata2 &&
            productdata2.map((l, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    padding: "20px 0px",
                  }}
                >
                  {l.map((prod) => (
                    <a href={`/items/${prod.id}`} key={prod.id}>
                      <Previewcomponent
                        name={prod.name}
                        description={prod.description}
                        price={prod.price}
                        falseprice={prod.falseprice}
                        picture={prod.picture.items[0]}
                      />
                    </a>
                  ))}
                </div>
              );
            })}
        </MediaQuery>
      </div>
      <Cart />
      <Footer />
    </div>
  );
}
