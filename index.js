const express = require ('express')
const cors = require('cors')
const app=express()
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
// const port = 5000;
const port=process.env.PORT || 5000;


// MIDDLEWARE
app.use(cors())
app.use(express())

console.log(process.env.USER_NAME)

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.zd2j777.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);






app.get('/',(req,res)=>{
    res.send('car Doctor server is now running')
})
app.listen(port, ()=>{
    console.log(`Car Doctor Server is now running on Port:${port}`)
})