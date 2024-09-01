const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const cors = require("cors");
const { error } = require("console");
const PORT = process.env.PORT || 3000;
var routes = require("./routes/routes");
var userModel = require('./src/user/userModel');
const app = express();

app.use(cors({
  origin:"http://localhost:4200"
}));

mongoose.set("strictQuery", true);
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase", {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectDB();

app.use(express.static("public"));
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, function(error) {
  if (error) {
    console.log("Error connecting to server");
  } else {
    console.log("Server is running on port "+ PORT);
  }
});

// Serve the static files from the Angular app
app.use(express.static(path.join(__dirname, '../dist/ethiccraft')));

// Serve your API routes
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

// Send all other requests to Angular's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/ethiccraft/index.html'));
});

app.post('/lokesh',(req,res)=>{
  console.log(req.body);
  const body = req.body
        const userModelData = new userModel()
        userModelData.Fname = body.Fname
        userModelData.Lname = body.Lname
        userModelData.email = body.email
        userModelData.gender=body.gender
        userModelData.year =body.year
        userModelData.college_id=body.college_id
        userModelData.phone=body.phone
        userModelData.course=body.course
        userModelData.connection=body.connection
        userModelData.save()
        res.status(200).send({
            "status": true, "message": "User Created Successfully"
        });
});
