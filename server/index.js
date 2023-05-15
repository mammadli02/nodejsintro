const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 8080;
let ID = undefined;
const fakeData = [
    {
        id: 1,
        productName: 'Iphne 13',
        brandName: 'Apple',
        price: 2500,
        stockCount:88,
        isDiscounted:true
    },
    {
      id: 2,
      productName: 'A 51',
      brandName: 'Samsung',
      price: 1500,
      stockCount:78,
      isDiscounted:true
  },
  {
    id: 3,
    productName: 'Readmi',
    brandName: 'Xiaomi',
    price: 1500,
    stockCount:78,
    isDiscounted:true
},
{
    id: 4,
    productName: 'Readmi10',
    brandName: 'Xiaomi',
    price: 1200,
    stockCount:28,
    isDiscounted:true
}
];
if (fakeData.length==0) {
    ID = 1;
}
else{
    let maxID = fakeData.sort((a,b)=>b.id-a.id)[0].id;
    ID = ++maxID;
}

//get all products
app.get("/products", (req, res) => {
  if (fakeData.length === 0) {
    res.status(204).send("no content");
    return;
  } else {
    res.status(200).send(fakeData);
    return;
  }
});
//get product by id
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const singleData = fakeData.find((data) => data.id === parseInt(id));

  if (singleData === undefined) {
    res.status(204).send("data not found 204");
    return;
  } else {
    res.status(200).send(singleData);
    return;
  }
});

//delete product by id
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const data = fakeData.find((data) => data.id === parseInt(id));
  if (data === undefined) {
    res.status(404).send("no such product found!");
    return;
  } else {
    const idx = fakeData.indexOf(data);
    fakeData.splice(idx, 1);
    res.status(202).send("product deleted successfully!");
  }
});

//post product
app.post("/products", (req, res) => {
  const newProduct = {
    id: ID,
    name: req.body.name,
    price: req.body.price
  } 
  fakeData.push(newProduct);
  ID++;
  res.status(201).send("data posted successfully");
});

app.listen(PORT, () => {
  console.log(`First Node App running on port ${PORT}`);
});






// const express = require('express');
// const router = express.Router();

// let products = [
//   {id: 1, productName: "Iphone 13", brandName: "Apple", price: 1800, stockCount: 20, isDiscounted: true},
//   {id: 2, productName: "Samsung S21", brandName: "Samsung", price: 1500, stockCount: 15, isDiscounted: false},
//   {id: 3, productName: "Pixel 6", brandName: "Google", price: 1300, stockCount: 10, isDiscounted: true},
// ];

// // GET all products
// router.get('/', (req, res) => {
//   res.json(products);
//   res.status(204).send("no content");
//   return;
// });

// // GET a product by ID
// router.get('/:id', (req, res) => {
//   const product = products.find(p => p.id === parseInt(req.params.id));
//   if (!product) return res.status(404).send('Product not found');
//   res.json(product);
//   return
// });

// // DELETE a product by ID
// router.delete('/:id', (req, res) => {
//   const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
//   if (productIndex === -1) return res.status(404).send('Product not found');
//   products.splice(productIndex, 1);
//   res.send('Product deleted successfully');
// });

// // POST a new product
// router.post('/', (req, res) => {
//   const {productName, brandName, price, stockCount, isDiscounted} = req.body;
  
//   // Validate request body
//   if (!productName || !brandName || !price || !stockCount) {
//     return res.status(400).send('Missing required fields');
//   }
  
//   const newProduct = {
//     id: products.length + 1,
//     productName,
//     brandName,
//     price,
//     stockCount,
//     isDiscounted
//   };
  
//   products.push(newProduct);
//   res.send('Product added successfully');
// });

// module.exports = router;