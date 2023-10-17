const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;


// alemranexpert
// z90P36pVX7KGAAIt

//* Middleware

app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alemranexpert:z90P36pVX7KGAAIt@cluster0.ftdzayi.mongodb.net/?retryWrites=true&w=majority";

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
    // await client.close();
  }
}
run().catch(console.dir);


//to check server is running

app.get('/', (req, res) => {
    res.send('Brand shop server is running');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})