const mongoose = require("mongoose");

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

module.export = Listing; 