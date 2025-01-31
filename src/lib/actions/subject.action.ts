import mongoose from "mongoose";
import Subject from "../database/subject.model";

export default async function connectDB() {
  try {
    const mongoUrl = process.env.MONGODB_URL;
    if (!mongoUrl) {
      throw new Error("MONGODB_URL is not defined in the environment variables");
    }
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}

async function insertSubjects() {
  const subjects = [
    // 1st Year, Sem 1
    { year: 1, sem: 1, subjectCode: "FCCS002", subjName: "Computer Programming", image: "" },
    { year: 1, sem: 1, subjectCode: "FCEC003", subjName: "Electronics and Electrical Engineering", image: "" },
    { year: 1, sem: 1, subjectCode: "FCME006", subjName: "Basics of Mechanical Engg.", image: "" },
    { year: 1, sem: 1, subjectCode: "FCMT001", subjName: "Mathematics-I", image: "" },
    { year: 1, sem: 1, subjectCode: "FCPH004", subjName: "Physics", image: "" },
    { year: 1, sem: 1, subjectCode: "FENH010", subjName: "The Science of Happiness and Wellbeing", image: "" },

    // 1st Year, Sem 2
    { year: 1, sem: 2, subjectCode: "COCSC01", subjName: "Discrete Structures", image: "" },
    { year: 1, sem: 2, subjectCode: "COCSC02", subjName: "Data Structures", image: "" },
    { year: 1, sem: 2, subjectCode: "COECC03", subjName: "Digital Logic Design", image: "" },
    { year: 1, sem: 2, subjectCode: "FCCH008", subjName: "Environment Science and Green Chemistry", image: "" },
    { year: 1, sem: 2, subjectCode: "FCHS005", subjName: "English", image: "" },
    { year: 1, sem: 2, subjectCode: "FCMT007", subjName: "Mathematics-II", image: "" },

    // 2nd Year, Sem 3
    { year: 2, sem: 3, subjectCode: "COCSCO4", subjName: "Web Technology", image: "" },
    { year: 2, sem: 3, subjectCode: "COCSCO5", subjName: "Database Management System", image: "" },
    { year: 2, sem: 3, subjectCode: "COCSCO6", subjName: "Design and Analysis of Algorithm", image: "" },
    { year: 2, sem: 3, subjectCode: "COCSCO7", subjName: "Computer Architecture and Organisation", image: "" },
    { year: 2, sem: 3, subjectCode: "COCSCO8", subjName: "Microprocessors and Microcontrollers", image: "" },

    // 2nd Year, Sem 4
    { year: 2, sem: 4, subjectCode: "COCSC09", subjName: "Operating Systems", image: "" },
    { year: 2, sem: 4, subjectCode: "COCSC10", subjName: "Theory of Automata & Formal Languages", image: "" },
    { year: 2, sem: 4, subjectCode: "COCSC11", subjName: "Software Engineering", image: "" },
    { year: 2, sem: 4, subjectCode: "COECC12", subjName: "Data Communication", image: "" },
    { year: 2, sem: 4, subjectCode: "COMTC13", subjName: "Probability and Stochastic Processes", image: "" },
    { year: 2, sem: 4, subjectCode: "FEPD015", subjName: "Yoga", image: "" },
  ];
  
  try {
    await Subject.insertMany(subjects);
    console.log("Subjects inserted successfully!");
  } catch (err) {
    console.error("Error inserting subjects:", err);
  }
}
  
(async function () {
  await connectDB();
  await insertSubjects();
  mongoose.connection.close();
})();
