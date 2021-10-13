import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MediaQuery from "react-responsive";
import { API, Auth, graphqlOperation, Storage, Hub } from "aws-amplify";
import Link from "next/link"; 

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Cart from "../../components/Cart";
import SizeDropDown from "../../components/SizeDropDown";
import Image from "../../components/Image";
import AddToCart from "../../components/AddToCart";
import styles from "./index.module.css";
import {getUser, getProduct, listCartItems} from "../../src/graphql/queries";

const imageData = [
  "https://source.unsplash.com/random/600x600",
  "https://picsum.photos/600/600",
  "https://random.imagecdn.app/600/600",
];
const sizedata = [
  {
    title: "Small",
  },
  {
    title: "Medium",
  },
  {
    title: "Large",
  },
  {
    title: "X - Large",
  },
];

function ItemPage() {
  const router = useRouter();
  const [productData, setProductData] = useState("");
  const [userData, setUserData] = useState("");
  const [loading, setLoading] =useState(true);
  const [productsize, setProductSize]= useState(null);

  useEffect(() => {
    if (router.asPath !== router.route) {
      async function fetchingProduct() {
        const prodid = router.query.id;
         try {
          let user = await Auth.currentAuthenticatedUser();
          const userid = user.attributes.sub;
          console.log(user);
          const userdata = await API.graphql(
            graphqlOperation(getUser, { id: userid })
          );
          setUserData(userdata);

         const productItem = await API.graphql(
            graphqlOperation(getProduct, { id: prodid })
          );
          setProductData(productItem.data.getProduct);
          changeLoaderState();

        } catch (e) {
          const productItem = await API.graphql({
            query: getProduct,
            variables: { id: prodid },
            authMode: "AWS_IAM",
          });
          setProductData(productItem.data.getProduct);
          changeLoaderState();
         }
      }
      fetchingProduct();
    }
    function changeLoaderState(){
    // const timeout = setTimeout(() => {
       setLoading(false)
    // }, 2000);
    }

  }, [router]);

  return (
    <>
      <Navbar />
      {loading && (
      <>
        <div className={styles.thehomiecompanyitempagemaincontainer}>
          <div>
            <div className={styles.loaderlargeimage} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{margin:'5px', height:"60px", width:"60px", backgroundColor:"gray"}}/>
              <div style={{margin:'5px', height:"60px", width:"60px", backgroundColor:"gray"}}/>
              <div style={{margin:'5px', height:"60px", width:"60px", backgroundColor:"gray"}}/>
            </div>
          </div>
          <div className={styles.thehomiecompanyitempagetextcontainer}>
            <div style={{height:'30px', width:'20%', backgroundColor:'gray', marginTop:'40px', marginLeft:10, textAlign:'center', alignSelf:'center'}}/>
            <div style={{height:'30px', width:'30%', backgroundColor:'gray', marginTop:'40px', marginLeft:10}}/>
            <div style={{height:'30px', width:'30%', backgroundColor:'gray', marginTop:'40px', marginLeft:10}}/>
            <div style={{height:'110px', width:'90%', backgroundColor:'gray', marginTop:'40px', marginLeft:10}}/>
            <div style={{height:'170px', width:'95%', backgroundColor:'gray', marginTop:'40px', marginLeft:10}}/>
          </div>
        </div>
      </>
      )}
      {productData && !loading && (
        <>
          <div className={styles.thehomiecompanyitempagemaincontainer}>
            <Image images={imageData} prodimages={productData.picture.items} />
            <div className={styles.thehomiecompanyitempagetextcontainer}>
              <p className={styles.thehomiecompanyitempageheadertext}>
                {productData.name}
              </p>
              <div className={styles.thehomiecompanypriceblock}>
                <div className={styles.thehomiecompanyitempagepricecontainer}>
                  <p className={styles.thehomiecompanyitempagetrueprice}>
                    ₹ {productData.price}
                  </p>
                  <p className={styles.thehomiecompanyitempagefalseprice}>
                    Rs {productData.falseprice}
                  </p>
                  <p className={styles.thehomiecompanyitempagediscount}>
                    (
                    {Math.floor(
                      (productData.price / productData.falseprice) * 100
                    )}
                    % OFF)
                  </p>
                </div>
              </div>
              <div className={styles.thehomiecompanytextwrapper}>
                <p className={styles.thehomiecompanyitempagetextblock}>
                  {productData.description}
                </p>
              </div>
              <div className={styles.thehomiecompanytextwrapper}>
                <p className={styles.thehomiecompanyitempagetextblock}>
                  {productData.descriptionblock.descriptionblockone}
                </p>
              </div>
              <div className={styles.thehomiecompanytextwrapper}>
                <p className={styles.thehomiecompanyitempagetextblock}>
                  {productData.descriptionblock.descriptionblocktwo}
                </p>
              </div>
              <div
                className={
                  (styles.thehomiecompanyitempagetextblock,
                  styles.thehomiecompanyitempagetextblocklist)
                }
              >
                <ul>
                  <li> {productData.feature.featureone}</li>
                  <li> {productData.feature.featuretwo}</li>
                  <li> {productData.feature.featurethree}</li>
                  <li> {productData.feature.featurefour}</li>
                </ul>
              </div>
              <MediaQuery minWidth={750}>
              { userData &&
                <div className={styles.thehomiecompanymedia}>
                  <div>
                  <div>
                    <SizeDropDown productid={router.query.id} category={productData.productcategory.category} prodsize={productData.size} productsize={productsize} setProductSize={setProductSize}/>
                  </div>
                  <div style={{height:40}}>
                    <AddToCart productid={router.query.id} productsize={productsize} />
                  </div>
                  </div>
                </div>
              }
              {!userData && <Link href={"/signin"}><a> <div style={{height:40, width:"100%", borderRadius:4, backgroundColor:"#000", border:"1px solid #ff4d15", color:"#ff4d15", display:'flex', justifyContent:'center', alignItems:'center', fontFamily:'Inter', fontWeight:'500', cursor:'pointer', fontSize:16, marginTop:10}}>Sign in to add to cart</div></a></Link>}
              </MediaQuery>
            </div>
          </div>
          <div className={styles.thcitemsbottombuttoncontainer}>
          {userData &&
            <>
            <div style={{ width: "50%" }}>
              <SizeDropDown productid={router.query.id} category={productData.productcategory.category} prodsize={productData.size} productsize={productsize} setProductSize={setProductSize}/>
            </div>
            <div
              style={{
                width: "50%",
                height:40
              }}
            >
              <AddToCart productid={router.query.id} productsize={productsize}/>
            </div>
            </>
            }
            {!userData &&
            <div style={{width:'100%', height:'100%', backgroundColor:"#ff4d15", color:"#fff", display:'flex', justifyContent:'center', alignItems:'center'}}>
                <h4>Sign in to add to cart</h4>
            </div>
            }
          </div>
          {!productData.active && 
            <div className={styles.soldoutImageContainer}>
              <div>
                <img src={"/soldout.png"} style={{width:'60vw'}}/>
              </div>
            </div>
          }
        </>
      )}
      {userData &&
      <Cart />
      }
      <Footer />
    </>
  );
}

export default ItemPage;
