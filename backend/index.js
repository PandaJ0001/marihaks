const express = require("express");
const mongoose = require("mongoose");
const connect = require("./database/database");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require('body-parser');

connect();

const listingSchema = new mongoose.Schema({
  org: 'string',
  description: 'string',
  category: 'string',
  address: 'string',
  task: 'string',
  info: 'string',
  method: 'string',
  contactName: 'string',
  contact: 'string'
});

const Listing = mongoose.model("Listing", listingSchema);

const app = express();
const port = 8080;

process.env.HOST = "0.0.0.0";

const GGL_API = process.env['GOOGLE_MAPS']

app.use(cors());
app.use(bodyParser.json());

app.get("/api/listings", (req, res) => {
  
  
  const Listings = Listing.find({});
});

app.post("/api/listing", async (req, res) => {
  Listing.create(req.body).then(res.send('ok')).catch('oops')
});

app.get("/api/address", async (req, res) => {
  const address = req.query.address;
  const postal = req.query.postal;
  const geoloc = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address} Canada&key=${GGL_API}`);

  let lat = geoloc.data.results[0].geometry.location.lat;
  let long = geoloc.data.results[0].geometry.location.lng;


});

app.listen(port, () => {
  console.log("Listening...");
});