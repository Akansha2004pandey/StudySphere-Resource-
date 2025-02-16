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
        <div className='md:w-96 w-4/5 cursor-pointer mx-3 my-4 bg-transparent rounded-lg shadow-md hover:shadow-lg transition duration-200 hover:scale-105'>
            <Card 
                onClick={() => router.push(`/${year}/${subjectCode}`)} 
                className='h-[150px] bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 transition duration-200'
            >
                <CardHeader>
                    <CardTitle className='text-lg font-semibold'>{subjectName}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className='text-white font-medium'>
                        <span className='px-3 py-2 rounded-2xl bg-gray-800'>{subjectCode}</span>
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}

export default SubjectCard;
