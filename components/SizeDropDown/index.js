import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { API, Auth, graphqlOperation, Storage, Hub } from "aws-amplify";
import {getUser} from "../../src/graphql/queries"
// import {filterTopSize} from "../../utilities/Size";


let abcd=[{title:"Small"},{title:"Small"},{title:"Small"},{title:"Small"},{title:"Small"},{title:"Small"},]
let topSizeData=[] 

export default function SizeDropDown({productid, category, prodsize, productsize, setProductSize}) {
  const [size, setSize] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("Select Size");
  const [topsizedata, setTopSizeData]=useState(null);
  const [check, setCheck]=useState(null);

  useEffect(() => {
    if(prodsize){
      filterTopSize(prodsize.topsize);
      console.log(topSizeData);
    }

    async function fetchSizeofProduct(){
         try {
          let user = await Auth.currentAuthenticatedUser();
          const userid = user.attributes.sub;
          const userdata = await API.graphql(
            graphqlOperation(getUser, { id: userid })
          );
          console.log("size:", userdata.data.getUser)
          const index = userdata.data.getUser.cart.items.findIndex((item) => item.product.id === productid);
          if(index!==-1){
            setButtonTitle(userdata.data.getUser.cart.items[index].size);
          }
         }catch(e){
          console.log("werjoiewjiofjeiofgkjadshgjkghkjasdhkjdahsjkgfhaskjhfjkasdhfkjadsjkf0",e)
         }
    }
    fetchSizeofProduct();
  }, [])

// style={{marginTop:`-${parseInt(top.length*40)}px`}}
// console.log('hel',`-${parseInt(top.length*40)}px`)
//  <AddToCart productid={router.query.id}  productsize={productsize}/>
//  <SizeDropDown category={productData.productcategory.category} size={productData.size} productsize={productsize} setProductSize={setProductSize}/>
  return (
    <div>
      {size && (
        <div className={styles.thcsizecontainer} style={{marginTop:`-${parseInt(topSizeData.length*40)}px`}}>
          {category.top &&  topSizeData.map((s, index) => (
            <p key={index}
               className={styles.thcsizeitem}
               onClick={() => {
                setProductSize(s.title)
                setButtonTitle(s.title);
                setSize(false);
               }}
            >
              {s.title}
            </p>
          ))}
           {category.bottom && sizedata.map((s, index) => (
            <p key={index}
               className={styles.thcsizeitem}
               onClick={() => {
                setProductSize(s.title)
                setButtonTitle(s.title);
                setSize(false);
               }}
            >
              {s.title}
            </p>
          ))}
          {category.other && sizedata.map((s, index) => (
            <p key={index}
               className={styles.thcsizeitem}
               onClick={() => {
                setProductSize(s.title)
                setButtonTitle(s.title);
                setSize(false);
               }}
            >
              {s.title}
            </p>
          ))}
        </div>
      )}
      <div
        onClick={() => {
          setSize(!size);
        }}
        className={styles.thcsizebutton}
      >
        {buttonTitle}
      </div>
    </div>    
  );
}

const filterTopSize=(topProductSize)=>{
    if(topProductSize.xsmall){
        let xsmall={
          title:"X - Small",
          xsmall:topProductSize.xsmall,
          xsmallStock:topProductSize.xsmallStock,
          xsmallAvailable:topProductSize.xsmallAvailable
          }
        topSizeData.push(xsmall);
    }
    if(topProductSize.small){
        let small={
          title:"Small",
          small:topProductSize.small,
          smallStock:topProductSize.smallStock,
          smallAvailable:topProductSize.smallAvailable
          }
        topSizeData.push(small);
    }
    if(topProductSize.medium){
        let medium={
          title:"Medium",
          medium:topProductSize.medium,
          mediumStock:topProductSize.mediumStock,
          mediumAvailable:topProductSize.mediumAvailable
          }
        topSizeData.push(medium);
    }
    if(topProductSize.large){
        let large={
          title:"Small",
          large:topProductSize.large,
          largeStock:topProductSize.largeStock,
          largeAvailable:topProductSize.largeAvailable
          }
        topSizeData.push(large);
    }
    if(topProductSize.xlarge){
        let xlarge={
          title:"X - Large",
          xlarge:topProductSize.xlarge,
          xlargeStock:topProductSize.xlargeStock,
          xlargeAvailable:topProductSize.xlargeAvailable
          }
        topSizeData.push(xlarge);
    }
    if(topProductSize.xxlarge){
        let xxlarge={
          title:"XX - Large",
          xxlarge:topProductSize.xxlarge,
          xxlargeStock:topProductSize.xxlargeStock,
          xxlargeAvailable:topProductSize.xxlargeAvailable
          }
        topSizeData.push(xxlarge);
    }
}