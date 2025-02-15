"use client";
import React, { useState, useEffect } from "react";
import { getSubjects } from "@/lib/actions/subject.action";
import SubjectCard from "@/components/ui/SubjectCard";
import PageNotFound from "@/components/ui/PageNotFound";
import Loader from "@/components/ui/Loader";

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

        if (isNaN(yearNumber) || yearNumber < 1 || yearNumber > 2) {
          setError("Page Not Found");
          setLoading(false);
          return;
        }

        const subjectsData = await Promise.all([
          getSubjects({ year: yearNumber, sem: yearNumber === 1 ? 1 : 3 }),
          getSubjects({ year: yearNumber, sem: yearNumber === 1 ? 2 : 4 })
        ]);

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
      <h1 className="text-4xl font-bold text-center mb-10">
        {yearNumber === 1 ? "1st Year" : "2nd Year"} Subjects
      </h1>

      {subjects.map((semesterSubjects, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6">
            {yearNumber === 1 ? (index === 0 ? "1st" : "2nd") : (index === 0 ? "3rd" : "4th")} Semester
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {semesterSubjects.length > 0 ? (
              semesterSubjects.map((subject: any, index: number) => (
                <SubjectCard
                  key={index}
                  subjectCode={subject.subjectCode}
                  year={yearNumber.toString()}
                  subjectName={subject.subjName}
                />
              ))
            ) : (
              <p className="text-center col-span-full">No subjects available for this semester.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
