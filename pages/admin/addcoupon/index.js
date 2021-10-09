import React, {useState} from 'react'
import { TextField, Button, TextareaAutosize, Radio } from "@material-ui/core";

import Footer from "../../../components/AdminFooter";
import Header from "../../../components/AdminHeader";
// import Sidebar from "../../../components/AdminSidebar";

export default function AddCoupon() {
    const [name, setName] = useState();
    const [discount, setDiscount] = useState();
    const [orders, setOrders]=useState();
    
    const utilcreateCoupon = async () => {
        
    }
    return (
      <div style={{ display: "flex" }}>
 
      <div style={{ width: "100%" }}>
        <Header />
        <div style={{ minHeight: "100vh", backgroundColor: "#ebedef",display:'flex', justifyContent:'center' }}>
          <div>
            <div>
            <TextField
             style={{margin:10}}
             required
             name="name"
             label="Name"
             variant="filled"
             value={name}
             placeholder="Name"
             onChange={(evt) => setName(evt.target.value)}
             />
             </div>
             <div>
            <TextField
             style={{margin:10}}
             required
             name="discount"
             label="Discount"
             variant="filled"
             value={discount}
             placeholder="Discount"
             onChange={(evt) => setDiscount(evt.target.value)}
             /> 
             </div>
             <div>
            <TextField
             style={{margin:10}}
             required
             name="orders"
             label="Orders"
             variant="filled"
             value={orders}
             placeholder="Orders"
             onChange={(evt) => setOrders(evt.target.value)}
             /> 
             </div>
             <div style={{display:'flex', justifyContent:'center'}}>
            <Button
             variant="contained"
             color="primary"
             type="submit"
             onClick={() => {
              utilcreateCoupon();
             }}
            >
             Add
            </Button>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </div>
    )
}
