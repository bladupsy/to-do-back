import express from "express";
import morgan from "morgan";
import cors from "cors"
import notFoundPath from "./src/middlewares/notFoundPath.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import connectToMongo from "./src/utils/mongo.utils.js";
import router from "./src/routes/index.router.js"
import "dotenv/config.js";


const server = express()

const port =  process.env.PORT || 8080
const ready = () => {
    console.log('server ready' + port)
    connectToMongo(process.env.MONGO_URI)
}

server.listen(port,ready)

//Middlewares

/*Obligo al servidor que van a aplicarse con cada solicitud  que se solicite. A que use tal funcionalidad de middleware  */
//Estan a nivel de aplicaciòn y son de terceros
//de express: son incorporados
server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(cors())
server.use(morgan("dev")) 

//Route

server.get("/", (req, res, next) => {
    try{
        return res.status(200).json({
            message: "TRELLO",
        })
    }catch (error) {
        return next(error)
    }
});
server.use("api/v1", router)
server.use(errorHandler)
server.use(notFoundPath)
