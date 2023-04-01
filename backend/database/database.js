const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect("mongodb+srv://pandaj:fleuve88@marihacksmvn.9vy2b0h.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database successfully connected!");
    });
};

module.exports = connect;