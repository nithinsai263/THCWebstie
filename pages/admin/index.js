import React, { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import Router from "next/router";
import { Line } from "react-chartjs-2";

import Footer from "../../components/AdminFooter";
import Header from "../../components/AdminHeader";
import styles from "./index.module.css";
import AdminCard from "../../components/AdminCard";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

function AdminLanding() {
  const [users, setUsers] = useState(100);
  const [posts, setPosts] = useState(20);
  const [contact, setContact] = useState(10);
  const [report, setReport] = useState(5);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const group = user.signInUserSession.idToken.payload["cognito:groups"];
      if (group.includes("admin")) {
        return;
      } else {
        Router.push("/");
        return;
      }
    } catch (err) {
      console.log(err);
      Router.push("/");
    }
  }

  return (
    <>
      <div style={{ display: "flex" }}>
 
        <div style={{ width: "80vw" }}>
          <Header />
          <div style={{ minHeight: "100vh", backgroundColor: "#ebedef" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img style={{ height: "150px" }} src={"/hacker.png"} />
              <div className={styles.dashboardTitle}>
                <h4 style={{ marginTop: "10px" }}> Hey Wassaappp</h4>
                <h6 style={{ marginTop: "10px", color: "#777" }}>
                  Welcome to admin dashboard
                </h6>
              </div>
            </div>
            <div className={styles.dashboardTileContainer}>
              {users && (
                <AdminCard Icon="user" title="Number of Users" Number={users} />
              )}
              {posts && (
                <AdminCard
                  Icon="video"
                  title="Number of Products"
                  Number={posts}
                />
              )}
              {contact && (
                <AdminCard
                  Icon="paths"
                  title="Number of Orders"
                  Number={contact}
                />
              )}
              {report && (
                <AdminCard
                  Icon="likes"
                  title="Number of Refunds"
                  Number={report}
                />
              )}
            </div>
            <div className={styles.dashboardTile2Container}>
              <div className={styles.dashboardCard2Container}>
                <h3
                  style={{ marginTop: "10px", color: "#777", fontSize: "15px" }}
                >
                  Order Traffic
                </h3>
                <div style={{ position: "relative" }}>
                  <Line data={data} />
                </div>
              </div>
              <div className={styles.dashboardCard2Container}>
                <h3
                  style={{ marginTop: "10px", color: "#777", fontSize: "15px" }}
                >
                  Stats Reports
                </h3>
                <div className={styles.dashboardCard2Wrapper1}>
                  <div className={styles.dashboardCard2Tile1}>
                    <div>
                      <h3>Revenue</h3>
                      {users && <p>{users}</p>}
                    </div>
                  </div>
                  <div className={styles.dashboardCard2Tile2}>
                    <div>
                      <h3>Refunds</h3>
                      {posts && <p>{posts}</p>}
                    </div>
                  </div>
                </div>
                <div className={styles.dashboardCard2Wrapper1}>
                  <div className={styles.dashboardCard2Tile3}>
                    <div>
                      <h3>Delivery</h3>
                      {users && <p>{users}</p>}
                    </div>
                  </div>
                  <div className={styles.dashboardCard2Tile4}>
                    <div>
                      <h3>Expenses</h3>
                      {contact && <p>{contact}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AdminLanding;
