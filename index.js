import express from "express";
import "dotenv/config.js";

const server = express()

const port =  process.env.PORT || 8080
const ready = ()=> console.log('server ready' + port)

server.listen(port,ready)