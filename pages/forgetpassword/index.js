import React , {useEffect, useState}from "react";
import Auth from "@aws-amplify/auth";
import Router from "next/router";

import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  const [email, setEmail]=useState();
  const [password, setPassword]=useState("");
  const [newpassword, setNewPassword]=useState();
  const [uistate, setUistate] = useState(false);
    useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user)
      const group = user.signInUserSession.idToken.payload["cognito:groups"];
      console.log("group = " + group.includes("admin"));
      if (group.includes("admin")) {
        Router.push("/admin");
        return;
      }
    else{
        Router.push("/");
    }
    } catch (err) { 
      console.log(err)   
    }
  }
  
  function handleSubmit(){
 if (password === "") {
        Auth.forgotPassword(email)
          .then((data) => {
            console.log(data);
            setUistate(true);
          })
          .catch((err) => console.log(err));
      } else {
          console.log(email, password, newpassword)
        Auth.forgotPasswordSubmit(
          email,
          password,
          newpassword
        )
          .then((data) => {
            console.log(data);
            Router.replace("/signin")
          })
          .catch((err) => console.log(err));
      }
    }
  
  return (
    <>
      <Navbar />
      <div className={styles["contact-section"]} id={styles.contact}>
        <div className={styles["login-container-1"]}>
          <div className={styles["login-content-wrapper"]}>
            <div
              style={{
                textAlign: "center",
                marginTop: "-25px",
                marginBottom: "25px",
              }}
            >
              {" "}
              <h6 style={{ color: "#fff" }}>Login to THC</h6>
            </div>

            <form  onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}>
              <div className={styles["login-email-wrapper"]}>
                <input
                 value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Email"
                  id={styles["abcdefg"]}
                  type="text"
                  name="email"
                  required
                />
              </div>
              {uistate &&
                <>
                    <div className={styles["login-password-wrapper"]}>
                        <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder="Enter Otp"
                        id={styles["abcdefg"]}
                        type="text"
                        name="otp"
                        required
                        />
                    </div>
                    <div className={styles["login-password-wrapper"]}>
                        <input
                        value={newpassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                        }}
                        placeholder="Enter New Password"
                        id={styles["abcdefg"]}
                        type="password"
                        name="new password"
                        required
                        />
                    </div>
                </>
              }

              <div>
                <input
                  type="submit"
                  name="Signin"
                  value="Signin"
                  id={styles["loginbutton"]}
                />
              </div>
            </form>

            <div
              style={{
                borderTop: "1px solid #ff4d15",
                borderLeft: "1px solid #ff4d15",
                borderRight: "1px solid #ff4d15",
                borderBottom: "1px solid #ff4d15",
                backgroundColor: "#000",
                height: "35px",
                width: "100%",
                color: "#ff4d15",
                fontWeight: "600",
                fontSize: "13px",
                border: "0px",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5px",
                boxShadow: "rgb(0 0 0 / 20%) 1px 1px 5px 0",
              }}
              onClick={()=>{ Auth.federatedSignIn({ provider: "Google" })}}
            >
              <p>Sign in with Google</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <hr />
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {" "}
                <p
                  style={{
                    fontSize: "12px",
                    color: "#eee",
                    textDecoration: "none",
                    border: "0px",
                  }}
                >
                  Forgot Password
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#eee",
                    textDecoration: "none",
                    border: "0px",
                  }}
                >
                  New User?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
