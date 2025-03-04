import React,{useState,useEffect} from "react";
import '../CSS/additem.css'

function Home(){
    return(
        <>
        <div className="main2">
        <h2>CREATE ITEM</h2>
            <div className="form">
                <form action="">
                    <input type="text" name="" id="" placeholder="Add menu"/>
                    <input type="text" name="" id="" placeholder="item name"/>
                    <textarea name="" id="" placeholder="Item description"></textarea>                    
                    <input type="text" name="" id="" placeholder="Item price"/>
                    <button>Add</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Home;