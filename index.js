
//LET's DO IT


// console.log(uuidv4())
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

dotenv.config()
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// const uid = generateUniqueId();
let currentCount=0;

app.use("/imageGenerate",async (req,res) => {

        console.log(currentCount++);

    // console.log("API HITTED")

})

app.listen(PORT,()=>{
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})
