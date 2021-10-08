import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

import Footer from "../../../components/AdminFooter";
import Header from "../../../components/AdminHeader";
import Sidebar from "../../../components/AdminSidebar";
import AdminTable from "../../../components/AdminTable/CouponTable";
import { listOrders } from "../../../src/graphql/queries";

 const d=[
    {
      id:"1234",
      name:"FIRST30",
      discount:"30%",
      numberoforders:"3",
      limit:"10"   
    }
 ]

 function ActiveCoupons() {
  const [data, setData] = useState(d);
  const tablelabels = [
    "ID",
    "Name",
    "Discount",
    "Number Of Orders",
    "Limit",
    "More",
  ];

  useEffect(() => {
    fetchproducts();
  }, []);

  async function fetchproducts() {
    const res = await API.graphql(graphqlOperation(listOrders));
    // setData(res.data.listOrders.items);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Header />
        <div style={{ minHeight: "100vh", backgroundColor: "#ebedef" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            {data && (
              <AdminTable
                tablelabels={tablelabels}
                tablelist={data}
              ></AdminTable>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ActiveCoupons;