//Desesctructuracion
export { connect } from "mongoose"

async function connectToMongo(uri){
    try{
        await connect(uri)
        console.log("Connect to mongo db")
    }catch(error){
        console.log(error)
    }
}

export default connectToMongo;