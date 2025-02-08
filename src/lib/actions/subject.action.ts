"use server";

import Subject from "../database/subject.model";
import { handleError } from "../utils";
import { subjects } from "@/constants";
import { connectDB } from "../database/connection";

async function insertSubjects() {
  try {
    await connectDB();
    await Subject.insertMany(subjects);
    console.log("Subjects inserted successfully!");
  } catch (err) {
    console.error("Error inserting subjects:", err);
    handleError(err);
  }
}

export async function getSubjects({ year, sem }: { year: number, sem: number }){
  try {
    await connectDB();
    const subjects = await Subject.find({ year }).where("sem").equals(sem);
    console.log("Subjects fetched successfully!", subjects.length);
    return subjects; 
  } catch (err) {
    console.error("Error fetching subjects:", err);
    handleError(err);
  } 
}