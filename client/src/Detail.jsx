import { useEffect, useState } from "react";

import { Card, Col, Row } from 'antd';
import Link from "antd/es/typography/Link";
import { useParams } from "react-router-dom";
function Detail() {
//   const [products, setProducts] = useState([]);
const{id}=useParams();
  const [product, setProduct] = useState({});
//   useEffect(() => {
//     fetch("http://localhost:8080/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//       });
//   }, []);
//   function handleClick(id) {
//     fetch(`http://localhost:8080/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//       });
//   }


  useEffect(()=>{
    fetch(`http://localhost:8080/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data);
    });
  })
//   function handleDelete(id) {
//     if (window.confirm("are you sure to delete?")) {
//       fetch(`http://localhost:8080/products/${id}`, {
//         method: "DELETE",
//       });
//       setProducts(products.filter((product)=>product.id!==id));
//     }
//   }



  return (
   <>
   
   <section style={{display:'flex', justifyContent:'center', product:'center', height:'450px'}}>
<Col span={8} key={product.id}>

<Card key={product.id}  style={{backgroundColor:'#f0f2f5', fontSize:'15px', fontWeight:'bolder'}}      
   >
 <p>productName: {product.productName} </p>  
   <p> BrandName: {product.brandName}</p> 
    <p>Price: {product.price}</p> 
  <p>stockCount: {product.stockCount}</p>   
   </Card>

</Col>
</section>


  
      {/* <hr /> */}
       {/* {product && <h1>NAME: {product.name}</h1>} */}
   </>


  );
}

export default Detail;


