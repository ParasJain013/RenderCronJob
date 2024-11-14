
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
app.get('/',async (req, res) => {
    res.send(200).json({success: true,message:"REACHED"});
});
app.get("/imageGenerate",async (req,res) => {

        console.log(currentCount++);
        res.send(200).json({success: true,message:currentCount});
    // console.log("API HITTED")

})

app.listen(PORT,()=>{
    console.log(`SERVER LISTENING ON PORT ${PORT}`)

    setInterval(async () => {
        try {
            const response = await fetch(`http://localhost:${PORT}/imageGenerate`);
            console.log(response);
            // const response = await axios.get(`http://localhost:${PORT}/imageGenerate`);
            // console.log("Response from /imageGenerate:", response.data);
        } catch (error) {
            console.error("Error hitting /imageGenerate:");
        }
    }, 1000); // 1000 ms = 1 second
})
