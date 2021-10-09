import React, { useEffect, useRef, useState } from "react";
import MediaQuery from "react-responsive";
import _ from "lodash";
import Auth from "@aws-amplify/auth";
import { FaBars, FaCartPlus, FaSearch, FaTimes } from "react-icons/fa";
import Link from "next/link";

import SearchComponent from '../SearchComponent'
import styles from "./index.module.css";
import Text from "../Text";
import Button from "../Button";

const products = [
  {
    name: "Sweat Shirt",
    description: "Nice Sweat",
    price: "500",
    id: "1",
  },
  {
    name: "TShirt",
    description: "Nice Sweat",
    price: "500",
    id: "2",
  },
  {
    name: "Shirt",
    description: "Nice Sweat",
    price: "500",
    id: "3",
  },
];
export default function Navbar(props) {
  const wrapperRef = useRef(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [userinput, setUserInput] = useState(null);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //for MobileView Nav
  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  });
  //for amplify
  useEffect(() => {
    getUser();
    async function getUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setAuthenticated(true);
      } catch (e) {
        //ignore
      }
    }
  });

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearch(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const handleChange = (e) => {
    const formatedQuery = e.target.value.toLowerCase();
    setUserInput(formatedQuery);
    if (formatedQuery === "") {
      setSearchedData(null);
    } else {
      const filter = _.filter(products, (p) => {
        return p.name.toLowerCase().includes(formatedQuery);
      });
      setSearchedData(filter);
    }
    console.log(searchedData);
  };

  return (
    <div className={styles.huemnNavContainer}>
      <MediaQuery minWidth={850}>
        <a href={"/"} className={styles.decorationNone}>
          <img src={"/logo.png"} style={{height:'50px', width:'60px'}}  alt="image" />
        </a>
        <div style={{ paddingLeft: authenticated ? "0vw" : "0vw" }}>
          <input
            placeholder="Chaotic Search"
            id={styles["chaoticSearch"]}
            onChange={handleChange}
          />
          {userinput && (
            <div
              style={{
                position: "fixed",
                width: "30vw",
                backgroundColor: "white",
                marginLeft: "10vw",
                zIndex: 999,
              }}
            >
                 {searchedData.map((s, index) => (
                  <div key={index}>
                    <SearchComponent text={s.name} subtext={s.description}/>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className={styles.flex}>
          {!authenticated && (
            <div className={styles.containerAlign}>
              <Link href={"/signin"}>
                <a>
                  <Text
                    text={"Login"}
                    padding={"10px 20px"}
                    fontWeight={"500"}
                    margin={"0px 20px 0px 0px"}
                    fontSize={"14px"}
                    classStyle={"textnav"}
                    link={true}
                  />
                </a>
              </Link>
              <Link href={"/signup"}>
                <a>
                  <Button
                    name={"Sign Up"}
                    color={"#fff"}
                    backgroundColor={"#ff4d15"}
                    height={"35px"}
                    padding={"10px 20px"}
                    classStyle={"huemntextbutton2"}
                    borderRadius={"2px"}
                  />
                </a>
              </Link>
            </div>
          )}
          {authenticated && (
            <div className={styles.containerAlign}>
              <Link href={"/myorders"}>
                <a>
                  <Text
                    text={"Orders"}
                    padding={"10px 20px"}
                    fontWeight={"500"}
                    margin={"0px 20px 0px 0px"}
                    fontSize={"14px"}
                    classStyle={"textnav"}
                    link={true}
                  />
                </a>
              </Link>
              <Link href={"/settings"}>
                <a>
                  <Text
                    text={"Settings"}
                    padding={"10px 20px"}
                    fontWeight={"500"}
                    margin={"0px 20px 0px 0px"}
                    fontSize={"14px"}
                    classStyle={"textnav"}
                    link={true}
                  />
                </a>
              </Link>

              <Button
                onClick={() => {
                  Auth.signOut();
                  setAuthenticated(false);
                }}
                name={"Logout"}
                color={"#fff"}
                backgroundColor={"#ff4d15"}
                height={35}
                padding={"10px 20px"}
                classStyle={"huemntextbutton2"}
                borderRadius={"2px"}
              />
            </div>
          )}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={850}>
        {!search && (
          <div className={styles.mobilenavbarcontainer}>
            <a className={styles.decorationNone} href={"/"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={"/logo.png"} height={"40"} width={"60"} alt="image" />
            </a>

            <div className={styles.huemnContainer3}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {click ? (
                <FaTimes
                  size={20}
                  color={"#ff4d15"}
                  onClick={handleClick}
                  style={{ marginLeft: "10px", marginRight: "10px", zIndex:999 }}
                />
              ) : (
                <>
                  <FaSearch
                    size={20}
                    color={"#ff4d15"}
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                    onClick={() => {
                      setSearch(true);
                    }}
                  />
                  <a className={styles.decorationNone} href={"/cart"}>
                    <FaCartPlus
                      size={20}
                      color={"#ff4d15"}
                      style={{ marginLeft: "10px", marginRight: "10px" }}
                    />
                  </a>
                  <FaBars
                    size={20}
                    color={"#ff4d15"}
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                    onClick={handleClick}
                  />
                </>
              )}
            </div>
          </div>
        )}
        {search && (
          <div>
            <div
              ref={wrapperRef}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.5s ease",
              }}
            >
              <input
                placeholder="Chaotic Search"
                id={styles["chaoticSearch2"]}
                onChange={handleChange}
              />
            </div>
            {userinput && (
              <div
                style={{
                  position: "fixed",
                  width: "80vw",
                  backgroundColor: "white",
                  zIndex: 999,
                }}
              >
                {searchedData.map((s, index) => (
                  <div key={index}>
                    <SearchComponent text={s.name} subtext={s.description}/>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {!authenticated && (
          <ul className={click ? styles.navMenuActive : styles.navMenu}>
            <li className={styles.navItems}>
              <a className={styles.decorationNone} href={"/signin"}>
                <div
                  style={{marginTop:60}}
                  className={styles.navLinks}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Signin
                </div>
              </a>
            </li>
            <li className={styles.navItems}>
              <a className={styles.decorationNone} href={"/signup"}>
                <div
                  className={styles.navLinks}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Signup
                </div>
              </a>
            </li>
          </ul>
        )}
        {authenticated && (
          <ul className={click ? styles.navMenuActive : styles.navMenu}>
            <li className={styles.navItems}>
              <a className={styles.decorationNone} href={"/myorders"}>
                <div
                  style={{marginTop:"60px"}}
                  className={styles.navLinks}
                  duration={500}
                  onClick={closeMobileMenu} 
                >
                  Orders
                </div>
              </a>
            </li>
            <li className={styles.navItems}>
              <a className={styles.decorationNone} href={"/settings"}>
                <div
                  className={styles.navLinks}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Settings
                </div>
              </a>
            </li>
            <li className={styles.navItems}>
              <a className={styles.decorationNone} href={"/"}>
                <div
                  className={styles.navLinks}
                  duration={500}
                  onClick={async() => {
                    await Auth.signOut();
                    closeMobileMenu();
                    setAuthenticated(false);
                  }}
                >
                  Logout
                </div>
              </a>
            </li>
          </ul>
        )}
      </MediaQuery>
    </div>
  );
}

// <div className={styles.huemnContainer4}>
// <div
//   className={`${styles.huemnContainer5} ${styles.containerCenter}`}
// >
//   Sign Up
// </div>
// <div
//   className={`${styles.huemnContainer6} ${styles.containerCenter}`}
// >
//   Login{" "}
// </div>
// </div>
