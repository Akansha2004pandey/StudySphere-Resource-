"use server";
import MaterialLink from "../database/materialLink.model";
import Material from "../database/material.model";
import { connectDB } from "../database/connection";
import { handleError } from "../utils";


export async function getAllDocuments(){
    try{
        await connectDB();
      const docs:any[] = await Material.find({})
        .select("_id year coursecode coursename ytPlaylist ebooks notes ppts pyqs")
        .populate("ytPlaylist ebooks notes ppts pyqs")
        .lean();
         const formattedDocs:unknown = docs.map((doc:any) => {
            return {
                _id: doc?._id.toString(),
                year: doc.year,
                coursecode: doc.coursecode,
                coursename: doc.coursename,
                ytPlaylist: doc.ytPlaylist.map((item: any) => item.link),
                ebooks: doc.ebooks.map((item: any) => item.link),
                notes: doc.notes.map((item: any) => item.link),
                ppts: doc.ppts.map((item: any) => item.link),
                pyqs: doc.pyqs.map((item: any) => item.link),
            };
         });
        console.log("Documents fetched successfully!");
        console.log(docs);
        return formattedDocs;
    }catch(err){
         console.error('Error fetching documents:', err);
         handleError(err);
    }
}
export async function getDoc(coursecode:String){
    await connectDB();
    try{
         const doc:any=await Material.findOne({coursecode:coursecode})
         .populate("ytPlaylist ebooks notes ppts pyqs")
         .lean();
       if(doc){ 
         const formattedDocs:unknown = {
            _id: doc?._id.toString(),
            year: doc?.year,
            coursecode: doc?.coursecode,
            coursename: doc?.coursename,
            ytPlaylist: doc?.ytPlaylist.map((item: any) => item.link),
            ebooks: doc.ebooks.map((item: any) => item.link),
            notes: doc?.notes.map((item: any) => item.link),
            ppts: doc?.ppts.map((item: any) => item.link),
            pyqs: doc?.pyqs.map((item: any) => item.link),
         };
         console.log("Document fetched successfully!");
         return formattedDocs;
        }
       return doc;
        
    }catch(err){
        console.error('Error fetching document:', err);
        handleError(err);
    }
}