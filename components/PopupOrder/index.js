import React, {useState} from 'react'

export default function PopupOrder({user,flag}) {
    const [background, setBackground]=useState(false)
    const ChangeBackground=()=>{
        if(flag){
            setBackground(!background);
        }
    }
    return (
    <>
    {!user &&
            <div>
                <div onClick={ChangeBackground} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:15, backgroundColor:background ?"#aaa":"#eee", marginBottom:5, marginTop:5, transition:"all 0.5s ease", cursor:flag?'pointer':''}}>
                  <div style={{display:'flex', alignItems:'center'}}>
                    <img src={"https://picsum.photos/200/300"} style={{height:100, width:100}}/>
                    <div style={{padding:10}}>
                      <p>Sweat Shirt</p>
                      <p>Sexy Noice</p>
                    </div>
                  </div>
                  <p>₹ 600</p>
                </div>
            </div>
  }
  {user &&
            <div>
                <div onClick={ChangeBackground} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:15, backgroundColor:background ?"#333":"#111", marginBottom:5, marginTop:5, transition:"all 0.5s ease", cursor:flag?'pointer':''}}>
                  <div style={{display:'flex', alignItems:'center'}}>
                    <img src={"https://picsum.photos/200/300"} style={{height:100, width:100}}/>
                    <div style={{padding:10}}>
                      <p>Sweat Shirt</p>
                      <p>Sexy Noice</p>
                    </div>
                  </div>
                  <p>₹ 600</p>
                </div>
            </div>
  }
    </>
    )
}
