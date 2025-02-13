export const testimonials = [
    {
      quote:
        "Former SDE Intern’24 @ Salesforce | Google Generation Scholar'24 | CSAI NSUT'25 | Mentor @ D'Code NSUT | Web Developer & ML Enthusiast | JP Morgan ML Quant Challenge'23 Finalist | CN Contest AIR 22",
      name: "Vishu Aasliya",
      designation: "Study material and handwritten notes",
      src: "https://drive.google.com/uc?export=view&id=1ebSyV1NYJor4ULvipGFs-0tFjsDGF-Zp",
    },
    {
      quote:
        "NSUT CSE'26",
      name: "Akansha Pandey",
      designation: "Website Development",
      src: "https://drive.google.com/uc?export=view&id=1zCpfLCC42vOfbNFmaGTL0u7kSSIobthQ",
    },
    {
      quote:
        "NSUT CSE'26",
      name: "Sanskriti",
      designation: "Website Development",
      src: "https://drive.google.com/uc?export=view&id=13pqUjaw8-K_RmHWWfz_tzujCxPpgQOxd",
    },
  ];

export const words = [
    {
      text: "TRIED",
      className: "text-xl md:text-3xl ml-4 md:ml-0",
    },
    {
      text: "AND",
      className: "text-xl md:text-3xl",
    },
    {
      text: "TESTED",
      className: "text-xl md:text-3xl",
    },
    {
      text: "BY",
      className: "text-xl md:text-3xl",
    },
    {
      text: "YOUR SENIORS",
      className: "text-xl md:text-3xl",
    },
  ];

  export const subjects = [
    // 1st Year, Sem 1
    { year: 1, sem: 1, subjectCode: "FCCS002", subjName: "Computer Programming", image: "" },
    { year: 1, sem: 1, subjectCode: "FCEC003", subjName: "Electronics and Electrical Engineering", image: "" },
    { year: 1, sem: 1, subjectCode: "FCME006", subjName: "Basics of Mechanical Engg.", image: "" },
    { year: 1, sem: 1, subjectCode: "FCMT001", subjName: "Mathematics-I", image: "" },
    { year: 1, sem: 1, subjectCode: "FCPH004", subjName: "Physics", image: "" },

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
];

export const materialTypes = ["ebooks", "ytPlaylist", "notes", "ppts", "pyqs"];
export const years = [1, 2];
export const semesters = [1, 2, 3, 4];
export const coursecodes = subjects.map((subject) => subject.subjectCode);
export const subjectNames = subjects.map((subject) => subject.subjName);

export const defaultValues = {
  coursecode: "",
  coursename: "",
  sem: 1, 
  year: 1,
  materialType: "", 
  title: "",
  material: "",
}