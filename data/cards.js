import "dotenv/config.js";
import connectToMongo from "../src/utils/mongo.utils.js";
import Card from "../src/models/Card.model.js";
import faker from "@faker-js/faker";

const card = [
    {
        title: faker.lorem.words({ min: 1, max: 10 }),
        description: faker.lorem.text(),
        list_id: "123",
    },
];

async function createData() {
    try {
        await connectToMongo(process.env.MONGO_URI);
        for(let i = 1; i < 10 ; i++){

            await Card.insertOne(card);
        }
        console.log("DONE CARD");
    } catch (err) {
        console.log(err);
    }
}

createData();
