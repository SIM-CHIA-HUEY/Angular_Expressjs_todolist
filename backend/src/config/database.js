import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

let database;

export async function connectDB() {
    try {
        await client.connect();

        database = client.db(process.env.DB_NAME);

        console.log("MongoDB connected successfully");

    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

export function getDB() {
    return database;
}