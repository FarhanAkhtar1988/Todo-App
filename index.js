const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

// use express router // middleware function // for home router
app.use(express.urlencoded());
app.use("/", require("./routes/index"));
app.use(express.static("assets"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// app listening on port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})