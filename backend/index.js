const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { routes } = require("./routes/auth.routes");
const ObjectId = require("mongodb").ObjectId;

require("dotenv").config();
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});
require('./db/db')();
app.use("/auth", routes)

// const uri = `mongodb+srv://${userName}:${password}@cluster0.or4h7.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// client.connect((err) => {
//   const productsCollection = client
//     .db("NobabjadaEcommerce")
//     .collection("products");

//   const articleCollection = client
//     .db("NobabjadaEcommerce")
//     .collection("articles");

//   //   Post - (Create)
//   app.post("/register", (req, res) => {

//     productsCollection
//             .insertOne(req.body)
//             .then((result) => {
//                 res.send(result.insertedCount > 0);
//             });
//   });
//   app.post("/addProduct", (req, res) => {

//     productsCollection
//             .insertOne(req.body)
//             .then((result) => {
//                 res.send(result.insertedCount > 0);
//             });
//   });
//   //   Article - (Create)
//   app.post("/addArticle", (req, res) => {

//     articleCollection
//             .insertOne(req.body)
//             .then((result) => {
//                 res.send(result.insertedCount > 0);
//             });
//   });

//   //   GET - (Read)
//   // Pagination Middleware
//   const paginateMiddleware = (model) => {
//     return (req, res, next) => {
//       const page = parseInt(req.query.page)
//       const limit = parseInt(req.query.limit)
      
//       const startIndex = (page - 1) * limit;
//       const endIndex = page * limit;
//       const results = {}
//       if(endIndex < model.length) {
//         results.next = {
//           page: page + 1,
//           limit : limit
//         }
//       }
//       if(startIndex > 0){
//         results.previouse = {
//           page: page - 1,
//           limit: limit,
//         }
//       }
//       results.results = model.slice(startIndex, endIndex)
//       res.paginatedResults = results;
//       next()
//     }
//   }
// const getALLProduct = ()=>{
//   let items 
//    return productsCollection.find({}).toArray((err, products) => {
//     err && console.log(err);
//   return products
//   })

  
// }
// const datas = getALLProduct()
// console.log(datas)
// app.get("/products/paginate", (req, res) => {
//   res.json(res.paginatedResults);
// });

//   app.get("/products", paginateMiddleware(getALLProduct()), (req, res) => {
//     res.json(res.paginatedResults);
//   });
//   app.get('/data', (req, res)=>{
//     productsCollection.find({}).toArray((err, products) => {
//       err && console.log(err);
//       // console.log(products);
//     })
//   })
  

//   // GET by ID - (Read)
//   app.get("/product/:id", (req, res) => {
//     const id = ObjectId(req.params.id);
//     productsCollection.find({ _id: id }).toArray((err, products) => {
//       err && console.log(err);
//       res.send(products[0]);
//     });
//   });

//   // UPDATE - (Update)
//   app.patch("/productUpdate/:id", (req, res) => {
//     const id = ObjectId(req.params.id);
//     const tritle = req.body.tritle;
//     const description = req.body.description;
//     const price = req.body.price;
//     const image = req.body.image;

//     productsCollection
//       .updateOne(
//         {
//           _id: id,
//         },
//         {
//           $set: {
//             tritle,
//             description,
//             price,
//             image,
//           },
//         }
//       )
//       .then((result) => {
//         res.send(result.modifiedCount > 0);
//       });
//   });

//   // DELETE - (Delete)
//   app.delete("/productDelete/:id", (req, res) => {
//     const id = ObjectId(req.params.id);
//     productsCollection.deleteOne({ _id: id }).then((result) => {
//       res.send(result.deletedCount > 0);
//     });
//   });

//   err ? console.error(err) : console.log("MongoDB Connected!");
// });

app.listen(process.env.PORT || port, () => {
  console.log(`Nobabjada Running on port ${port}`);
});
