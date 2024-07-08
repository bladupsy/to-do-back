import "dotenv/config.js"
import connectToMongo from "../src/utils/mongo.utils.js"
import User from "../src/models/User.model.js"

const users =   [
    {
        email: "igna@gmail.com",
        password: "hola1234",
        age: 23,
    },
    {
        email: "sol@gmail.com",
        password: "hola1234",
        age: 22,
    }
]

async function createData(){
    try{
        await connectToMongo(process.env.MONGO_URI)
        await User.insertMany(users)
        console.log("DONE")
    }catch(err){
        console.log(err)
    }
}

createData()