const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
const dbName = "SeriesDB";

client.connect()

const db = client.db(dbName);

module.exports = { db, ObjectId };


