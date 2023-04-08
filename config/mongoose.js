// required mongoose 
const mongoose = require("mongoose");

// catch if error
main().catch(err => console.log(err));

// connecting to database
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todo_list_backend');
  console.log("MongoDb connected to the server")
}