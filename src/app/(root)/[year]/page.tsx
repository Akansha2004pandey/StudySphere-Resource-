import React from 'react'
import { getSubjects } from '@/lib/actions/subject.action'
import SubjectCard from '@/components/ui/SubjectCard';
import PageNotFound from '@/components/ui/PageNotFound';
const page = async ({ params }: { params: Promise<{ year: string }> }) => {

    const { year } = await params;
    const yearNumber = Number(year)

    if (isNaN(yearNumber)) {
        console.error("Invalid year parameter:", year);
        return <div>Error: Invalid Year</div>;
    }
    if (yearNumber > 2) {
        return <div><PageNotFound /></div>
    }
    const subjects_firstyear = await getSubjects({ year: yearNumber, sem: 2 * yearNumber - 1 });
    console.log(subjects_firstyear);

    const subjects_secondyear = await getSubjects({ year: yearNumber, sem: 2 * yearNumber });
    console.log(subjects_secondyear);

    return (
        <div className='bg-gradient-to-r from-[#073b4c] via-[#032d3b] to-[#04232d] py-40'>
            <div className='text-[50px] font-extrabold text-center'>
                <span className='  text-white '>{yearNumber == 1 ? "1st Year" : "2nd Year"} Subjects</span>
            </div>

            <div className='flex flex-col justify-center mx-auto items-center'>
                <div className="text-3xl font-semibold my-5 
  bg-gradient-to-r from-[#97f5ef] to-[#97f5ef]
  bg-clip-text text-transparent">
                    <i>{2 * yearNumber - 1} Semester</i>
                </div>

                <div className='flex flex-wrap justify-center mx-auto mb-20'>{subjects_firstyear.map((subject, index) => (
                    <SubjectCard subjectCode={subject.subjectCode} year={year} subjectName={subject.subjName} key={index} />
                ))}</div>

            </div>
            <div className='flex flex-col justify-center mx-auto items-center'>
                <div className="text-3xl font-semibold my-5 
  bg-gradient-to-r from-[#97f5ef] to-[#97f5ef]
  bg-clip-text text-transparent">
                    <i>{2 * yearNumber} Semester</i>
                </div>
                <div className='flex flex-wrap justify-center mx-auto mb-20'>{subjects_secondyear.map((subject, index) => (
                    <SubjectCard subjectCode={subject.subjectCode} year={year} subjectName={subject.subjName} key={index} />
                ))}</div>

            </div>
        </div>
    )
}

export default page
