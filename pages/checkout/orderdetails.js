import React, { useState, useEffect } from "react";
import { API, Auth, graphqlOperation, Storage, Hub } from "aws-amplify";

import Button from "../../components/Button";
import CheckoutCard from "../../components/CheckoutCard";
import Input from "../../components/Input";
import styles from "./index.module.css";
import {createAddress, updateAddress, updateUser} from "../../src/graphql/mutations";
import {getUser} from "../../src/graphql/queries";

export default function OrderDetails({ setPageState, currbill, couponChecker }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    async function fetchingAddress() { 
      let user = await Auth.currentAuthenticatedUser();
      const userid = user.attributes.sub;

      const userdata = await API.graphql(
        graphqlOperation(getUser, { id: userid })
      );
      setUserData(userdata.data.getUser);
      if(!userdata.data.getUser.shipaddress){
      const temp={
        firstname:'',
        lastname:'',
        email:'',
        phonenumber: '',
        address: '',
        city: '',
        state: '',
        pincode:''
      }
      const res = await API.graphql(
        graphqlOperation(createAddress, {
          input: temp,
        })
      );
      // alert('this is it',res.data.createAddress.id);
      console.log('this is it',userData.id)
      const updatedUser={
        userShipaddressId:res.data.createAddress.id,
        id: userid
      }
      const userdata = await API.graphql(
        graphqlOperation(updateUser, { input: updatedUser})
      );
      setUserData(userdata.data.getUser);
      }
    }
    fetchingAddress();
  }, [])

  

  const handleSubmit = async (event) => {
    console.log(userData);
      const temp={
        id: userData.shipaddress.id,
        firstname:firstname,
        lastname:lastname,
        email:email,
        phonenumber: phone,
        address: address,
        city: city,
        state: state,
        pincode:pincode
      }
      const res = await API.graphql(
        graphqlOperation(updateAddress, {
          input: temp,
        })
      );
      console.log(res)
  };

  return (
    <div className={styles.checkoutpaymentcontainer}>
      <div className={styles.checkoutpaymentleftcontainer}>
        <div style={{ display: "flex", justifyContent: "center", marginTop:-20 }}>
          <div style={{ textAlign: "center" }}>
            <img src={"/logo.png"} style={{ height: 60, width: 90 }} />
            <div
              style={{
                display: "flex",
                width: 200,
                justifyContent: "space-between",
              }}
            >
              <p style={{ cursor: "pointer", fontFamily:"Inter", fontSize:12 }}>Order Details</p>
              <p style={{ fontFamily:"Inter", fontSize:12}}>/</p>
              <p style={{ fontFamily:"Inter", fontSize:12}}>Payment</p>
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: -5 }}>Contact Information</h4>
          <Input value={email} setValue={setEmail} placeholder={"Email"} />
          <Input
            value={phone}
            setValue={setPhone}
            placeholder={"Phone Number"}
          />
          <h4 style={{ marginBottom: -5 }}>Address Information</h4>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "49%" }}>
              <Input
                value={firstname}
                setValue={setFirstName}
                placeholder={"First Name"}
              />
            </div>
            <div style={{ width: "49%" }}>
              <Input
                value={lastname}
                setValue={setLastName}
                placeholder={"Last Name"}
              />
            </div>
          </div>
          <Input
            value={address}
            setValue={setAddress}
            placeholder={"Address"}
          />
          <Input value={city} setValue={setCity} placeholder={"City"} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "49%" }}>
              <Input value={state} setValue={setState} placeholder={"State"} />
            </div>
            <div style={{ width: "49%" }}>
              <Input
                value={pincode}
                setValue={setPincode}
                placeholder={"Pin Code"}
              />
            </div>
          </div>
          <div
            style={{ marginRight: "-20px" }}
            onClick={async() => {
              await handleSubmit();
              setPageState("payments");
            }}
          >
            <Button
              name={"Proceed"}
              backgroundColor={"#ff4d15"}
              borderRadius={"4px"}
            />
          </div>
        </div>
      </div>
      <div className={styles.checkoutpaymentrightcontainer}>
      {currbill && couponChecker &&
        <CheckoutCard currbill={currbill} couponChecker={couponChecker}/>
      }
      </div>
    </div>
  );
}
