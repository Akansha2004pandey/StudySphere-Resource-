"use server";
import MaterialLink from "../database/materialLink.model";
import Material from "../database/material.model";
import { connectDB } from "../database/connection";
import { handleError } from "../utils";

export async function getAllDocuments() {
  try {
    await connectDB();
    const docs: any[] = await Material.find({})
      .select("_id year coursecode coursename ytPlaylist ebooks notes ppts pyqs")
      .populate("ytPlaylist ebooks notes ppts pyqs")
      .lean();

    const formattedDocs: unknown = docs.map((doc: any) => {
      return {
        _id: doc?._id.toString(),
        year: doc.year,
        coursecode: doc.coursecode,
        coursename: doc.coursename,
        ytPlaylist: doc.ytPlaylist.map((item: any) => ({
          link: item.link,
          title: item.title,  
          type: item.type,
          id: item._id.toString() 
        })),
        ebooks: doc.ebooks.map((item: any) => ({
          link: item.link,
          title: item.title,
          type: item.type,  
          id: item._id.toString() 
        })),
        notes: doc.notes.map((item: any) => ({
          link: item.link,
          title: item.title,  
          type: item.type,
          id: item._id.toString() 
        })),
        ppts: doc.ppts.map((item: any) => ({
          link: item.link,
          title: item.title,  
          type: item.type,
          id: item._id.toString()
        })),
        pyqs: doc.pyqs.map((item: any) => ({
          link: item.link,
          title: item.title,
          type: item.type,
          id: item._id.toString() 
        })),
      };
    });

    console.log("Documents fetched successfully!");
    console.log(docs);
    return formattedDocs;
  } catch (err) {
    console.error('Error fetching documents:', err);
    handleError(err);
  }
}

export async function getDoc(coursecode: String) {
  await connectDB();
  try {
    const doc: any = await Material.findOne({ coursecode: coursecode })
      .populate("ytPlaylist ebooks notes ppts pyqs")
      .lean();

    if (doc) {
      const formattedDocs: unknown = {
        _id: doc?._id.toString(),
        year: doc?.year,
        coursecode: doc?.coursecode,
        coursename: doc?.coursename,
        ytPlaylist: doc?.ytPlaylist.map((item: any) => ({
          link: item.link,
          title: item.title, 
          type: item.type, 
          id: item._id.toString() 
        })),
        ebooks: doc.ebooks.map((item: any) => ({
          link: item.link,
          title: item.title,  
          type: item.type,
          id: item._id.toString() 
        })),
        notes: doc?.notes.map((item: any) => ({
          link: item.link,
          title: item.title,  
          type: item.type,
          id: item._id.toString() 
        })),
        ppts: doc?.ppts.map((item: any) => ({
          link: item.link,
          title: item.title,  
          type: item.type,
          id: item._id.toString() 
        })),
        pyqs: doc?.pyqs.map((item: any) => ({
          link: item.link,
          title: item.title, 
          type: item.type, 
          id: item._id.toString() 
        })),
      };

      console.log("Document fetched successfully!");
      return formattedDocs;
    }
    return doc;
  } catch (err) {
    console.error('Error fetching document:', err);
    handleError(err);
  }
}
export const deleteMaterial = async (coursecode: string, materialType: string, materialId: string) => {
    try{
        await connectDB();
        const deletdoc=await MaterialLink.findByIdAndDelete(materialId);
        console.log("deleted material link:",deletdoc);
        const res=await Material.findOneAndUpdate(
            {coursecode},
            {$pull:{[materialType]:materialId}},
            {new:true,upsert:true}
        );
        console.log("document updated successfully");   
        return ;
    }catch(err){
        console.error("Error in deleteMaterial:", err);
        handleError(err);
    }
}
