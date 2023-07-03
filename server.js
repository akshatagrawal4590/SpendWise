const express = require("express");
const dbConnect = require("./dbConnect.js");
const app = express();
const port = process.env.port || 4000;
app.use(express.json());
const userRoute = require("./routes/userRoute.js");
const transactionsRoute = require("./routes/transactionsRoute.js");
const path = require("path");

app.use("/api/users", userRoute);
app.use("/api/transactions", transactionsRoute);

app.use("/", express.static("client/build"));
app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
})

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});