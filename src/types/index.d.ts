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
  