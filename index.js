const http = require('http');
const axios = require('axios');
const express= require('express')
const routes=require('./Routes/user')
const app= express();
var cors = require('cors');
app.use(cors());
const PORT=3000;

//routes
app.use(express.json());
app.use("/api",routes );

//server connection
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});