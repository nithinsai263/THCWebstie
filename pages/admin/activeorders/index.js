import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

import Footer from "../../../components/AdminFooter";
import Header from "../../../components/AdminHeader";
// import Sidebar from "../../../components/AdminSidebar";
import AdminTable from "../../../components/AdminTable/OrderTable";
import { listOrders } from "../../../src/graphql/queries";

 const d=[
    {
      id:"1234",
      name:"Kumar ANkit",
      email:"ak@gmail.com",
      phone:"9949694474",
      payment:"COD",
      amount:"4000",
      items:"6",
      address:"Flat: 102, Plot: 53, Rishabh Residency, Kalyan Nagar Phase 3, Hyderabad",
      pincode:"500018",
    }
 ]

 function ActiveOrders() {
  const [data, setData] = useState(d);
  const tablelabels = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "Payment",
    "Amount",
    "Items",
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

export default ActiveOrders;