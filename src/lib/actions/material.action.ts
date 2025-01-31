import mongoose from "mongoose";
import Material from "../database/material.model";
import connectDB from "./subject.action";
const insertTestDocument = async () => {
    try {
        const testMaterial = new Material({
            year: 1,
            coursecode: "TEST001",
            coursename: "Test Course",
            ytPlaylist: [],
            ebooks: [],
            notes: [],
            ppts: [],
            pyqs: [],
          });
          const res = await testMaterial.save();
          console.log("Doc inserted sucessfully", res);
    } catch (error) {
        console.log(error);
    } 
}

(async function () {
  await connectDB();
  await insertTestDocument();
  mongoose.connection.close();
})();
