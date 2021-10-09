import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

import Footer from "../../../components/AdminFooter";
import Header from "../../../components/AdminHeader";
import Sidebar from "../../../components/AdminSideBar";
import AdminTable from "../../../components/AdminTable/UserTable";
import { listUsers } from "../../../src/graphql/queries";

 const d=[
    {
      id:"1234",
      name:"Kumar ANkit",
      email:"ak@gmail.com",
      phone:"9949694474",
      orders:"20",
      items:"6",
      amount:"4000",
      
    }
 ]

 function AllUsers() {
  const [data, setData] = useState(d);
  const tablelabels = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "Orders",
    "Items",
    "Amount",
    "More",
  ];

  useEffect(() => {
    fetchproducts();
  }, []);

  async function fetchproducts() {
    const res = await API.graphql(graphqlOperation(listUsers));
    // setData(res.data.listOrders.items);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar/>
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

export default AllUsers;