import "dotenv/config.js";
import connectToMongo from "../src/utils/mongo.utils.js";
import Card from "../src/models/Card.model.js";
import faker from "@faker-js/faker";
import Activity from "../src/models/Activity.model.js";

const activities = [
    {
        action: faker.lorem.words({ min: 1, max: 10 }),
        board_id: faker.lorem.text(),
        user_id: "123",
    },
];

async function createData() {
    try {
        await connectToMongo(process.env.MONGO_URI);
        for(let i = 1; i < 10 ; i++){

            await Activity.insertOne(activities);
        }
        console.log("DONE ACTIVITY");
    } catch (err) {
        console.log(err);
    }
}

createData();
