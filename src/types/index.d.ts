declare type MaterialProps = {
    year: number;
    coursecode: string;
    coursename: string;
    ytPlaylist?: string[];
    ebooks?: string[];
    notes?: string[];
    ppts?: string[];
    pyqs?: string[];
};
  
declare type SubjectProps = {
    year: number;
    sem: number;
    subjectCode: string;
    subjName: string;
    image: string | "/srcImg"; // Optional field for image URLs
};

declare type MaterialType = "drive" | "ytPlaylist" | "notes" | "ppts" | "pyqs";

declare type addDocumentParams = {
    coursecode: string;
    courseName: string;
    year: number;
    sem: number;
}

declare type updateMaterialParams = {
    year: number;
    sem: number;
    coursecode: string;
    coursename: string;
    materialType: string;
    title: string;
    material: string;
};