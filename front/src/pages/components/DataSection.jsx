import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const DataSection = () => {
    const {data,setData,filter,setFilterData}=useContext(ProductsContext)
const navigate = useNavigate()
    const GetAllData=async()=>{
        const res = await axios.get("http://localhost:3000/cloth")
        setData(res?.data)
        setFilterData(res?.data)
        console.log(res?.data);
    }
    useEffect(()=>{
        GetAllData()
    },[])
  return (
    <div className='data'>
        {filter.map((elem)=>(
            <div className='datas' key={elem._id}>
               <div className='image1'>
                <img className='dataimage' src={elem.img} alt="" /> 
                <h1 className='datatitle'>{elem.title}</h1>
                <div style={{display:"flex"}}>
                <p className='dataparag' style={{margin:"auto",marginTop:"50px"}}>${elem.price}</p>
                <p className='dataparag2' style={{margin:"auto",marginTop:"50px",textDecoration:"line-through"}}>${elem.price}</p>
                </div>
                <button className='detailbtn' onClick={()=>navigate(`/${elem._id}`)}>Detail</button>
                </div>
            </div>
        ))}

    </div>
  )
}

export default DataSection