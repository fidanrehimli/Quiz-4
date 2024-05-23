import React from 'react'
import "./style.css"
const Madewel = () => {
  return (
    <div className='madewel'>

        <div className='leftmadewel'>
            <h1 className='madewelltext'>MADEWELL</h1>
            <h3 className='madewellparag'>Summer Collection</h3>
            <div className='prices'>
                <p style={{fontSize:"32px",alignItems:"center",justifyContent:"center",margin:"auto"}}>1.499</p>
                <p style={{textDecoration:"line-through",color:"grey",fontSize:"32px",margin:"auto"}}>$1.999</p>
            </div>
            <div className='buttons'>
            <button className='shop1' style={{margin:"auto"}}>Shop Now</button>
            <button className='shop2' style={{margin:"auto"}}>Shop Now</button>
            </div>
        </div>
        <div className='madawelimage'></div>

    </div>
  )
}

export default Madewel