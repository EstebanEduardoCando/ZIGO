const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri =  process.env.MONGO_URL
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});