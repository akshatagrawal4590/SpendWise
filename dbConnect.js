const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://admin-akshat:akshatmongo@cluster0.uued4pv.mongodb.net/Expense_TrackerApp", {useNewUrlParser: true, useUnifiedTopology: true});
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }


// const connect = mongoose.connect("mongodb+srv://admin-akshat:akshatmongo@cluster0.uued4pv.mongodb.net/Expense_TrackerApp", {useNewUrlParser: true, useUnifiedTopology: true});
// const connection = mongoose.connection;
