const express =require("express")
const usersRoutes = require("./routes/usersRoutes")
const path = require("path")

const app = express()

//middlewares
app.use(express.json());

app.use(usersRoutes)

//home route
app.get("/", (req, res)=>{
res.sendFile(path.join(__dirname + "/pages/index.html"))    
})
const PORT = 4000;

app.listen(PORT, ()=>{
    console.log("SERVER IS UP")
})