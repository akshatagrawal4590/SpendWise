const express = require("express");
const app = express();
const port = process.env.port || 4000;
const userRoute = require("./routes/userRoute.js");
const transactionsRoute = require("./routes/transactionsRoute.js");
const path = require("path");
const mongoose = require("mongoose");
app.use(express.json());

const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://admin-akshat:akshatmongo@cluster0.uued4pv.mongodb.net/Expense_TrackerApp", {useNewUrlParser: true, useUnifiedTopology: true});
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

app.use("/api/users", userRoute);
app.use("/api/transactions", transactionsRoute);

app.use("/", express.static("client/build"));
app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
})

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});