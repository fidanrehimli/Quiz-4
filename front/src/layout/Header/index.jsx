import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";



const index = () => {
  return (
    <div className='container'>
    <header>
        <h1 className='dealerstext'>DEALERS</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"} className={(navData)=>navData.isActive? "active":""}>Collection</NavLink>
                    <NavLink to={"/shop"} className={(navData)=>navData.isActive? "active":""}>Shop</NavLink>
                    <NavLink to={"/detail"} className={(navData)=>navData.isActive? "active":""}>Detail</NavLink>
                    <NavLink to={"/add"} className={(navData)=>navData.isActive? "active":""}>Add</NavLink>
                </li>

            </ul>

        </nav>
        <div style={{display:"flex",gap:"20px"}}>
        <IoSearchSharp />
        <CiHeart />
        <FaBagShopping />
        </div>


    </header>
    </div>
  )
}

export default index