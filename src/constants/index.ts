export const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

export const words = [
    {
      text: "TRIED",
      className: "text-blue-100 text-3xl z-10",
    },
    {
      text: "AND",
      className: "text-blue-100 text-3xl z-10",
    },
    {
      text: "TESTED",
      className: "text-blue-100 text-3xl z-10",
    },
    {
      text: "BY",
      className: "text-blue-100 text-3xl z-10",
    },
    {
      text: "YOUR SENIORS",
      className: "text-yellow-200 dark:text-yellow-200 text-3xl z-10",
    },
  ];

  export const subjects = [
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