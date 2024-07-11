import "dotenv/config.js";
import connectToMongo from "../src/utils/mongo.utils.js";
import Card from "../src/models/Card.model.js";
import faker from "@faker-js/faker";
import Activity from "../src/models/Activity.model.js";
import Board from "../src/models/Board.model.js";

const boards = [
    {
        name: faker.lorem.words({ min: 1, max: 10 }),
        description: faker.lorem.text(),
        user_id: "123",
    },
];

async function createData() {
    try {
        await connectToMongo(process.env.MONGO_URI);
        for(let i = 1; i < 10 ; i++){

            await Board.insertOne(boards);
        }
        console.log("DONE BOARDS");
    } catch (err) {
        console.log(err);
    }
}

createData();
