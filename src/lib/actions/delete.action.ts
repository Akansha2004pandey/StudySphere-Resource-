"use server";
import Material from "../database/material.model";
import { connectDB } from "../database/connection";
import { handleError } from "../utils";

export async function getAllDocuments(){
    try{
        await connectDB();
        const docs = await Material.find({}).lean();
        return docs;
    }catch(err){
         console.error('Error fetching documents:', err);
         handleError(err);
    }
}
export async function getDoc(coursecode:String){
    await connectDB();
    try{
         const doc=await Material.findOne({coursecode:coursecode}).lean();
         return doc;
    }catch(err){
        console.error('Error fetching document:', err);
        handleError(err);
    }
}