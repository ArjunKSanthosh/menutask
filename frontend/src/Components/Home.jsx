import React,{useState,useEffect} from "react";
import '../CSS/home.css'

function Home(){
    return(
        <>
      
<div className="main">
    <div className="nav">
        <ul>
           <li>HOME</li>
           <li>MENU</li>
           <li>MAKE A RESERVATION</li>
           <li>CONTACT US</li>
        </ul>
    </div>
    <div className="menu">
        <div className="content">
            
        <h1>MENU</h1>
        <p>please take alook at our menu featuring food,drinks and and brunch.If you,d like to <br/>
        place an order ,use the " Order Online" buttton loacted below the menu</p>
        </div>
    </div>
</div>
      
        </>
    )
}
export default Home;