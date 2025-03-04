import React,{useState,useEffect} from "react";
import '../CSS/home.css'
import '../img/phone.png'

function Home(){
    return(
        <>
      
<div className="main">
    <div className="nav">
        <div className="nam1">
            <h2>DEEP<span className="net1">NET</span><span className="soft">SOFT</span></h2>
        </div>
        <div className="list">        
        <ul>
           <li>HOME</li>
           <a href="#menu"><li>MENU</li></a>
           <li>MAKE A RESERVATION</li>
           <a href="#contact"><li>CONTACT US</li></a>
        </ul>
        </div>
    </div>
    <div className="menu" >
        <div className="content">
            
        <h1>MENU</h1>
        <p>please take alook at our menu featuring food,drinks and and brunch.If you,d like to <br/>
        place an order ,use the " Order Online" buttton loacted below the menu</p>
        </div>
    </div>
    <div className="menus" id="menu"    >
        <button className="butt">MENU</button>
        <button className="butt">MENU 2</button>
    </div>
    <div className="items">
        <div className="item2">
            <div className="titlee">
             <h3>BRUNCH COCKTAILS</h3>
            </div>
            <div className="item3">
                <h4>cocktail................................... <span>16</span> <br /><p>description</p> </h4>
                <h4>cocktail................................... <span>16</span> <br /><p>description</p> </h4>
                <h4>cocktail................................... <span>16</span> <br /><p>description</p> </h4>
                <h4>cocktail................................... <span>16</span> <br /><p>description</p> </h4>
            </div>
        </div>
    </div>
    <div className="contact" id="contact">
        <div className="connect">
            <h5>CONNECT WITH US</h5>
           <p><img src="phone.png" alt=" phone"  /> <span>+91 9567843340</span></p> 
           <p><img src="mail.png" alt=" phone"  /> <span>info@deenetsoft</span></p> 

        </div>
        <div className="company">
            <div className="comp">
         <h2>DEEP <span className="net">NET</span> <span>SOFT</span></h2>
            </div>
            <div className="logos">
                <img src="fb.png" alt="" />
                <img src="twitter.png" alt="" />
                <img src="yt.png" alt="" />
                <img src="ig.png" alt="" />
            </div>

        </div>
        <div className="find">
            <div className="find2">

            <h5>FIND US</h5>
            </div>
            <div className="log">

            <p><img src="loaction2.png" alt="" />First floor,Geo Infopark,Infopark EXPY,Kakkanad</p>
            </div>
        </div>
    </div>
</div>
      
        </>
    )
}
export default Home;