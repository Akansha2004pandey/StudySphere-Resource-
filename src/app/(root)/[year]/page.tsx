"use client";
import React, { useState, useEffect, AnyActionArg } from "react";
import { getSubjects } from "@/lib/actions/subject.action";
import SubjectCard from "@/components/ui/SubjectCard";
import PageNotFound from "@/components/ui/PageNotFound";
import Loader from "@/components/ui/Loader";

const page = ({ params }: { params: Promise<{ year: string }> }) => {
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

        if (isNaN(yearNumber)) {
          console.error("Invalid year parameter:", year);
          setError("Invalid Year");
          setLoading(false);
          return;
        }

        if (yearNumber < 1 || yearNumber > 2) {
          setError("Page Not Found");
          setLoading(false);
          return;
        }

        const subjectsFirstYearData = await getSubjects({
          year: yearNumber,
          sem: yearNumber === 1 ? 1 : 3, 
        });
        const subjectsSecondYearData = await getSubjects({
          year: yearNumber,
          sem: yearNumber === 1 ? 2 : 4, 
        });
        setSubjects([subjectsFirstYearData, subjectsSecondYearData]); 
      } catch (err) {
        console.error(err);
        setError("Error fetching subjects");
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [params]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div>
        {error === "Page Not Found" ? <PageNotFound /> : <div>{error}</div>}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#073b4c] via-[#032d3b] to-[#04232d] py-40">
      <div className="text-[50px] font-extrabold text-center">
        <span className="text-white">
          {yearNumber === 1 ? "1st Year" : "2nd Year"} Subjects
        </span>
      </div>

      {subjects.length > 0 && (
        <>
          {/* First Semester Subjects */}
          <div className="flex flex-col justify-center mx-auto items-center">
            <div className="text-3xl font-semibold my-5 bg-gradient-to-r from-[#97f5ef] to-[#97f5ef] bg-clip-text text-transparent">
              <i>{yearNumber === 1 ? "1st" : "3rd"} Semester</i>
            </div>

            <div className="flex flex-wrap justify-center mx-auto mb-20">
              {subjects[0]?.length > 0 ? (
                subjects[0].map((subject:any, index:any) => (
                  <SubjectCard
                    subjectCode={subject.subjectCode}
                    year={yearNumber.toString()}
                    subjectName={subject.subjName}
                    key={index}
                  />
                ))
              ) : (
                <div>No subjects available for this semester.</div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center mx-auto items-center">
            <div className="text-3xl font-semibold my-5 bg-gradient-to-r from-[#97f5ef] to-[#97f5ef] bg-clip-text text-transparent">
              <i>{yearNumber === 1 ? "2nd" : "4th"} Semester</i>
            </div>

            <div className="flex flex-wrap justify-center mx-auto mb-20">
              {subjects[1]?.length > 0 ? (
                subjects[1].map((subject:any, index:any) => (
                  <SubjectCard
                    subjectCode={subject.subjectCode}
                    year={yearNumber.toString()}
                    subjectName={subject.subjName}
                    key={index}
                  />
                ))
              ) : (
                <div>No subjects available for this semester.</div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
