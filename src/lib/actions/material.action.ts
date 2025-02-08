"use server";

import Material from "@/lib/database/material.model";
import { connectDB } from "../database/connection";
import { handleError } from "../utils";

const insertNewDocument = async ({coursecode, courseName, year, sem}: addDocumentParams) => {
    try {
        await connectDB();
        const newMaterial = new Material({
            year: year,
            sem: sem,
            coursecode: coursecode,
            coursename: courseName,
            ytPlaylist: [],
            ebooks: [],
            notes: [],
            ppts: [],
            pyqs: [],
          });
          const res = await newMaterial.save();
          console.log(res);
          return res;
    } catch (error) {
        console.log(error);
    } 
}

async function getMaterial({ subjCode }: { subjCode: string }) {
    try {
        await connectDB();
        const material = await Material.findOne({ coursecode: subjCode });
        return material;
    } catch (error) {
        console.error("Error fetching material:", error);
        throw new Error("Failed to fetch material");
    } 
}

export async function getList({ subjCode, materialType }: { subjCode: string, materialType: string }){
    try {
        await connectDB();
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

// UPDATE
export async function updateMaterial({
    coursecode,
    coursename,
    sem,
    year,
    materialType,
    material,
  }: updateMaterialParams) {
  try {
    await connectDB();
    const existingDoc = await Material.findOne({ coursecode });
    if (!existingDoc) {
      await Material.create({ coursecode, coursename, sem, year });
    }
    const res = await Material.findOneAndUpdate(
      { coursecode },
      { $push: { [materialType]: material } },
      { new: true, upsert: true } 
    );
    console.log("document updated successfully");
  } catch (err) {
    console.error("Error in updateMaterial:", err);
    handleError(err)
  }
}