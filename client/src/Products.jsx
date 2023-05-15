import { useEffect, useState } from "react";

import { Card, Col, Row } from 'antd';
import Link from "antd/es/typography/Link";
import { useParams } from "react-router-dom";
function Products() {
  const{id}=useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setProduct(data)
      });
  }, []);
  // function handleClick(id) {
  //   fetch(`http://localhost:8080/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //     });
  // }
  useEffect(()=>{
    fetch(`http://localhost:8080/products/detail/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data);
    });
  })
  function handleDelete(id) {
    if (window.confirm("are you sure to delete?")) {
      fetch(`http://localhost:8080/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((product)=>product.id!==id));
    }
  }



  return (
   <>
   <Row gutter={[20,30] }style={{margin:'30px auto', width:'80%'}} >
    
        {products &&
          products.map((item) => {
            return (



<Col  span={24} key={item.id} className="gutter-row"  xs={24} sm={24} md={12} lg={6}>
      
      <Card key={item.id}  style={{backgroundColor:'#f0f2f5', fontSize:'15px', fontWeight:'bolder'}}      
  
  
  
  >
     <Link to={`detail/${item.id}`}><p>{item.productName} </p></Link>
      <p> {item.brandName}</p> 
       <p>{item.price}</p> 
     <p>{item.stockCount}</p>   
     <button onClick={() => handleDelete(item.id)}>delete</button>
       {/* <p>{item.position}</p>  */}
      </Card>
    </Col>






      //         <li key={item.id}>
      //           <button onClick={() => handleClick(item.id)}>
      //             {item.name}
      //           </button>
      //           , {item.price}
      //           <button onClick={() => handleDelete(item.id)}>delete</button>
      //         </li>
            );
          })}
  
      {/* <hr /> */}
       {/* {product && <h1>NAME: {product.name}</h1>} */}
   </Row>
   </>


  );
}

export default Products;


