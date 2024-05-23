import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ProductsContext } from "../context/ProductsContext";
import axios from "axios";
import { ProductsSchema } from "../schema/ProductsSchema";
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import {TextField} from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Add = () => {
  const {
    data,
    setData,
    sortData,
    setSortData,
    imgInp,
    setImgInp,
    titleInp,
    setTitleInp,
    paragInp,
    setParagInp,
    priceInp,
    setPriceInp,
  } = useContext(ProductsContext);
  const GetAllData = async () => {
    const res = await axios("http://localhost:3000/cloth");
    setData(res?.data);
    setSortData(res?.data);
  };

  useEffect(() => {
    GetAllData();
  }, []);
  const {
    register,handleSubmit,formState:{errors}
  }=useForm({
    resolver:yupResolver(ProductsSchema)
  })

  const createProduct = async(values)=>{
    await axios.post("http://localhost:3000/cloth",{
      "img":imgInp,
      "title":titleInp,
      "price":priceInp
    })
    GetAllData()
  }
  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3000/cloth/${id}`)
    GetAllData();
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <form onSubmit={handleSubmit(createProduct)}>
      <TextField name="img" placeholder="Image" type="text" {...register('img')} onChange={(e)=>setImgInp(e.target.value)} />
  {errors.img?.message && (
      <p style={{ color: "red" }}>{errors.img?.message}</p>
    )}
    <TextField name="title" placeholder="title" type="text" {...register("title")} onChange={(e)=>setTitleInp(e.target.value)}/>
{errors.title?.message && (
  <p style={{color:"red"}}>{errors.title?.message}</p>
)}
  <TextField name="price" placeholder="price" type="number" {...register("price")} onChange={(e)=>setPriceInp(e.target.value)}/>
{errors.price?.message && (
  <p style={{color:"red"}}>{errors.price?.message}</p>
)}
<button className="addbtn" type="submit">Add</button>

      </form>
      <button onClick={()=>{
  let newarr = [...data].sort((a,b)=>a.title[0].localeCompare(b.title[0]))
  setSortData(newarr);
  setData(newarr)
}}>A-Z</button>
<button onClick={()=>{
  let newarr = [...data].sort((a,b)=>b.title[0].localeCompare(a.title[0]))
  setSortData(newarr);
  setData(newarr)
}}>Z-A</button>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortData.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row._id}
              </TableCell> */}
              <TableCell ><img className="addimage" src={row.img} alt="" /></TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell><button variant="contained" color="primary" onClick={()=>deleteData(row._id)}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
};

export default Add;
