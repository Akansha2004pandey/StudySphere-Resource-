"use server"
import mongoose from "mongoose";
import Material from "../database/material.model";
import { connectDB } from "./subject.action";
import { handleError } from "../utils";

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

// (async function () {
//   await connectDB();
//   await insertTestDocument();
//   mongoose.connection.close();
// })();


async function getMaterial({ subjCode }: { subjCode: string }) {
    try {
        await connectDB();
        const material = await Material.findOne({ coursecode: subjCode });
        return material;
    } catch (error) {
        console.error("Error fetching material:", error);
        throw new Error("Failed to fetch material");
    } finally {
        mongoose.connection.close();
    }
}

export async function getList({ subjCode, materialType }: { subjCode: string, materialType: string }){
    try {
        let res = await getMaterial({subjCode: subjCode});
        if(materialType == "drive"){
            return res.ebooks;
        }else if(materialType == "ytPlaylist"){
            return res.ytPlaylist;
        }else if(materialType == "notes"){
            return res.notes;
        }else if(materialType == "ppts"){
            return res.ppts;
        }else if(materialType == "pyqs"){
            return res.pyqs;
        }else{
            return "Invalid material type";
        }
    } catch (error) {
        handleError(error);
    }
}

// async function main() {
//     let res = await getList({ subjCode: "TEST001", materialType: "ppts"});
//     console.log(res);
// }

// main().catch(console.error);
