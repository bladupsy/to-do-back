import { Schema, model } from "mongoose";

const collection = "activity";

const schema = new Schema(
  {
    action: { type: String, required: true },
    board_id: { type: Types.ObjectId, ref: "boards", required: true },
    user_id: { type: Types.ObjectId, ref: "users", required: true },
  },
  { timestamps: true }
);

const Activity = model(collection, schema);
export default Activity;
