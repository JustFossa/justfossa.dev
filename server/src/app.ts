import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"    
import https from "https"
import fs from "fs"
import path from "path"


const app = express()

app.use(express.static(path.join(__dirname, "dist")));
app.use(cors())
app.use(express.json())

app.get("*",  (req, res) => {
	res.sendFile(path.join(__dirname, "dist/index.html"))
})

 //https.createServer(keys, app).listen(443, () => {console.log("Server is running on port 443")})
app.listen(80, () => {
    console.log("Server running on port 80")
})