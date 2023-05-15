import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
const AdminAddEmployee = () => {
  const [newEmplos, setNewEmplos]=useState({})
  const navigate=useNavigate()
 async function handleSubmit(e){
e.preventDefault(); 
newEmplos.id=uuidv4()

const postProduct=(newProducts)=>{
    axios.post(`http://localhost:8080/products`, newProducts)
}


 await postProduct(newEmplos)
navigate('/products/')

  }
function handleChange(e){
  setNewEmplos({...newEmplos,[e.target.name]: e.target.value})
}

  return (
<>
<form style={{margin:'50px auto', width:'80%'}} onSubmit={handleSubmit}>
  <input name="productName" type="text" onChange={(e)=>handleChange(e)} placeholder='productName'/>
  <input name='brandName' type="text" onChange={(e)=>handleChange(e)}  placeholder='brandName'/>
  <input name='price' type="number" onChange={(e)=>handleChange(e)}  placeholder='price' min={0} max={100000} required/>
  <input name='stockCount' type="number" onChange={(e)=>handleChange(e)}  placeholder='stockCount' min={0} required/>
  <button type='submit'>Add</button>
</form>
</>
  )
}
 
export default AdminAddEmployee