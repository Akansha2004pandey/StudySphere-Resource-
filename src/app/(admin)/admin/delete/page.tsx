"use client";
import React, { useEffect, useState } from "react";
import { getAllDocuments } from "@/lib/actions/delete.action";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";
const AdminDelete = () => {
    const router = useRouter();
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllDocuments();
                const plainData = JSON.parse(JSON.stringify(result)); 
                setData(plainData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        
  return (
    <Loader />
  );

    }

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
            <h1 className="text-center text-3xl font-bold py-10 text-white">Admin Delete</h1>
            {data && data.length > 0 ? (
                data.map((item:any) => (
                    <div key={item._id} className="flex flex-col items-center justify-center">
                        <Card className="md:w-3/4 w-full my-3">
                            <CardHeader>
                                <CardTitle>{item.coursename}</CardTitle>
                                <CardDescription>{item.coursecode}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="default" onClick={()=>router.push(`/admin/delete/${item.coursecode}`)}>Delete The content</Button>
                            </CardContent>
                        </Card>
                    </div>
                ))
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default AdminDelete;
