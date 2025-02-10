"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getDoc } from "@/lib/actions/delete.action";
import DeleteCard from "@/components/ui/DeleteCard";
const Page = ({ params }: { params: Promise<{ course: string }> }) => {
  const [coursecode, setCoursecode] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<string>("");
  const [contentData, setContentData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const {course} = await params;
      if (course) {
        const result = await getDoc(course);
        const plainTextdata = JSON.parse(JSON.stringify(result));
        setData(plainTextdata);
        setCoursecode(course);
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  useEffect(() => {
    if (data) {
      switch (content) {
        case "Youtube":
          setContentData(data.ytPlaylist);
          break;
        case "Notes":
          setContentData(data.notes);
          break;
        case "PPTS":
          setContentData(data.ppts);
          break;
        case "PYQS":
          setContentData(data.pyqs);
          break;
        default:
          setContentData(null);
      }
    }
  }, [content, data]);

  if (loading) {
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="flex items-center space-x-2">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
      
    </div>
  </div>
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen w-full py-10">
    <div className="md:w-3/4 w-full mx-auto p-6 bg-white shadow-lg rounded-lg pt-6 ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Course: {coursecode}</h1>
      {data && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">{data.coursename}</h2>
          <p className="text-gray-700">{data.coursedescription}</p>
          <div className="flex space-x-4 mt-4">
            <Button
              variant={content === "Youtube" ? "custom" : "default"}
              onClick={() => setContent("Youtube")}
             
            >
              Youtube
            </Button>
            <Button
              variant={content === "Notes" ? "custom" : "default"}
              onClick={() => setContent("Notes")}
             
            >
              Notes
            </Button>
            <Button
              variant={content === "PPTS" ? "custom" : "default"}
              onClick={() => setContent("PPTS")}
              
            >
              PPTS
            </Button>
            <Button
              variant={content === "PYQS" ? "custom" : "default"}
              onClick={() => setContent("PYQS")}
      
            >
              PYQS
            </Button>
          </div>
          {contentData && (
  <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner">
    <h3 className="text-lg font-semibold mb-2">{content} Content:</h3>
    {contentData.map((item: any) => {
      return (
        <DeleteCard
          key={item.id} // assuming each item has a unique 'id' or another unique field
          coursename={data.coursename}
          coursecode={data.coursecode}
          content={content}
          contentData={item}
        />
      );
    })}
  </div>
)}

        </div>
      )}
    </div>
    </div>
  );
};

export default Page;
