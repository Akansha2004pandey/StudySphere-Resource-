"use client";
import React, { useState, useEffect } from "react";
import { getSubjects } from "@/lib/actions/subject.action";
import SubjectCard from "@/components/ui/SubjectCard";
import PageNotFound from "@/components/ui/PageNotFound";
import Loader from "@/components/ui/Loader";
import { GraduationCap, BookOpen } from "lucide-react"; 

const Page = ({ params }: { params: Promise<{ year: string }> }) => {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [yearNumber, setYearNumber] = useState<number>(0);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const { year } = await params;
        const yearNumber = Number(year);
        setYearNumber(yearNumber);

        if (isNaN(yearNumber) || yearNumber < 1 || yearNumber > 4) {
          setError("Page Not Found");
          setLoading(false);
          return;
        }

        const semesterMapping: { [key: number]: number[] } = {
          1: [1, 2],
          2: [3, 4],
          3: [5, 6],
          4: [7, 8],
        };

        const subjectsData = await Promise.all(
          semesterMapping[yearNumber].map((sem) => getSubjects({ year: yearNumber, sem }))
        );

        setSubjects(subjectsData);
      } catch (err) {
        console.error(err);
        setError("Error fetching subjects");
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [params]);

  if (loading) return <Loader />;
  if (error) return error === "Page Not Found" ? <PageNotFound /> : <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 pt-36">
      <h1 className="text-4xl font-bold text-center mb-10 flex justify-center items-center gap-3">
        <GraduationCap size={36} className="text-gray-200" />
        {yearNumber} Year Subjects
      </h1>

      {subjects.map((semesterSubjects, index) => (
        <div key={index} className="mb-16">
    
          <h2 className="text-2xl font-semibold text-center mb-6 flex justify-center items-center gap-2">
            <BookOpen size={28} className="text-gray-400" />
            Semester {index + 1 + (yearNumber - 1) * 2}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {semesterSubjects.length > 0 ? (
              semesterSubjects.map((subject: any, index: number) => (
                <SubjectCard key={index} subjectCode={subject.subjectCode} year={yearNumber.toString()} subjectName={subject.subjName} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center text-gray-400">
                <p className="text-lg font-medium">No subjects available for this semester.</p>
                <p className="text-sm">Please check back later or contact your administrator.</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
