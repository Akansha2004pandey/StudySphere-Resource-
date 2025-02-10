"use server";

import Material from "@/lib/database/material.model";
import { connectDB } from "../database/connection";
import { handleError } from "../utils";
import MaterialLink from "../database/materialLink.model";
import mongoose from "mongoose";

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
    title,
    material,
  }: updateMaterialParams) {
  try {
    await connectDB();
    const existingDoc = await Material.findOne({ coursecode });
    if (!existingDoc) {
      await Material.create({ 
        coursecode, 
        coursename, 
        sem, 
        year, 
        ytPlaylist: [],
        ebooks: [],
        notes: [],
        ppts: [],
        pyqs: [], 
       });
    }
    const newMaterialLink = await MaterialLink.create({ 
        _id: new mongoose.Types.ObjectId(),
        type: materialType,
        title: title,
        link: material,
    });
    console.log("Id of new doc is: ", newMaterialLink._id);
    const res = await Material.findOneAndUpdate(
      { coursecode },
      { $push: { [materialType]: newMaterialLink._id } },
      { new: true, upsert: true } 
    );
    console.log("document updated successfully");
  } catch (err) {
    console.error("Error in updateMaterial:", err);
    handleError(err);
  }
}