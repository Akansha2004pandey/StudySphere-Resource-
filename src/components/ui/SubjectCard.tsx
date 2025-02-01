"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const SubjectCard = ({ subjectCode, subjectName, year }: { subjectCode: string, subjectName: string, year: string }) => {
    const router = useRouter();
    return (
        <div className='md:w-96 w-4/5 cursor-pointer mx-3 my-4 bg-transparent rounded-lg shadow-md hover:shadow-xl transition duration-200 hover:scale-105'>
            <Card 
                onClick={() => router.push(`/${year}/${subjectCode}`)} 
                className='h-[150px] bg-gradient-to-r from-[#3795a3] to-[#48b0c0] hover:from-[#357985] hover:to-[#357985]  text-white border-none'
            >
                <CardHeader>
                    <CardTitle>{subjectName}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className='text-gray-900 font-semibold'><span className='px-3 py-2 opacity-0.6  rounded-2xl  bg-white'>{subjectCode}</span> </CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}

export default SubjectCard;
