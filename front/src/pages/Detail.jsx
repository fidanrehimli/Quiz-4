import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { ProductsContext } from '../context/ProductsContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./style.css"

const Detail = () => {
  const {data,setData,filter,setFilterData}=useContext(ProductsContext)
  const {detailId}=useParams()

  const getProduct =async()=>{
    try{
      const res=await axios("http://localhost:3000/cloth/"+detailId)
      setData(res?.data)
    }catch(err){}
  }

  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='details'>
            <img className='detailimg' src={data.img} alt="" />
            <p className='detailtitle'>{data.title}</p>
            <p className='detailprice'>${data.price}</p>
            <button className='detaildelete' onClick={()=>{
              let newarr = filter.filter((item)=>item.id!=data.id)
              axios.delete("http://localhost:3000/cloth"+"/"+data.id)
              setFilterData(newarr)
            }}>Delete</button>
            </div>
    </div>
  )
}

export default Detail