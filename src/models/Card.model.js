import { Schema, Types, model } from "mongoose";

const collection = "cards";

const schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    list_id: { type: Types.ObjectId, ref: "lists", required: true },
    user_id: { type: Types.ObjectId, ref: "users", required: true },
  },
  { timestamps: true }
);

const Card = model(collection, schema);
export default Card;