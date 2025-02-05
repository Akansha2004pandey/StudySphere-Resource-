import User from "../database/user.model";
import mongoose from "mongoose";
import { handleError } from "../utils";
import bcrypt from "bcryptjs";
import { connectDB } from "./subject.action";

export const insertTestDocument = async () => {
    await connectDB();
    try {
       

        const hashedPassword = await bcrypt.hash(process.env.PASSWORD as string, 10);
        console.log(hashedPassword);

        const admin = new User({
            username: process.env.USERNAME as string,
            password: hashedPassword,
        });

        await admin.save();
        console.log("User inserted successfully");
    } catch (err) {
        console.log("Error inserting user:", err);
    } finally {
        mongoose.connection.close();
    }
};

