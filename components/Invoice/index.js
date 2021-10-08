import React from 'react'
import easyinvoice from 'easyinvoice';
const data = {
  "currency": "INR",
  "taxNotation": "GST",
  "marginTop": 50,
  "marginRight": 50,
  "marginLeft": 50,
  "marginBottom": 25,
  "background": "https://public.easyinvoice.cloud/pdf/sample-background.pdf",
  "sender": {
    "company": "The Homie Company",
    "address": "Himayat Nagar",
    "zip": "500018",
    "city": "Hyderabad",
    "country": "India"
  },
  "client": {
    "company": "Client Corp",
    "address": "Clientstreet 456",
    "zip": "4567 CD",
    "city": "Clientcity",
    "country": "Clientcountry"
  },
  "invoiceNumber": "2021.0001",
  "invoiceDate": "1.1.2021",
  "products": [
    {
      "quantity": "2",
      "description": "Test1",
      "tax": 12,
      "price": 33.87
    },
    {
      "quantity": "3",
      "description": "Test3",
      "tax": 25,
      "price": 93
    },
    {
      "quantity": "4",
      "description": "Test2",
      "tax": 21,
      "price": 10.45
    }
  ],
  "bottomNotice": "Kindly pay your invoice within 15 days."
}
    
export default function App(props) {
  const generatePdf=async()=>{
    easyinvoice.createInvoice(data, function (result) {
    easyinvoice.download('THEHOMIECOMPANY.pdf', result.pdf);
    });
    }
    return (
    <div onClick={()=>generatePdf()}>
     {props.children}
    </div>
    )
  
}
