"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { getDoc } from '@/lib/actions/delete.action';
import Loader from '@/components/ui/Loader';
import Youtube from '@/components/ui/Youtube';
import Files from '@/components/ui/Files';

const Page = ({ params }: { params: Promise<{ year: string, subject: string }> }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [coursecode, setCoursecode] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [contentData, setContentData] = useState<any>(null);
  const [availableContent, setAvailableContent] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { subject } = await params;
      if (subject) {
        const res = await getDoc(subject);
        const plainTextdata = JSON.parse(JSON.stringify(res));
        console.log(plainTextdata);

        setData(plainTextdata);
        setCoursecode(subject);
        setLoading(false);
        
        // Determine which content types have data
        const contentTypes = [];
        if (plainTextdata.ebooks?.length) contentTypes.push("Ebooks");
        if (plainTextdata.ppts?.length) contentTypes.push("PPTs");
        if (plainTextdata.notes?.length) contentTypes.push("Notes");
        if (plainTextdata.ytPlaylist?.length) contentTypes.push("Youtube Playlists");
        if (plainTextdata.pyqs?.length) contentTypes.push("PYQS");
        setAvailableContent(contentTypes);
      }
    };
    fetchData();
  }, [params]);

  useEffect(() => {
    setContentData(data?.[content.toLowerCase().replace(" ", "")] || null);
  }, [content, data]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 px-4 pt-36">
      {/* Course Name */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8">
        {data?.coursename}
      </h1>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 bg-[#073b4c] p-4 rounded-xl shadow-lg">
        {availableContent.length>0?availableContent.map((item, index) => (
          <Button
            key={index}
            variant="custom"
            className="text-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition"
            onClick={() => setContent(item)}
          >
            {item}
          </Button>
        )) :<div>No content available for this subject.</div> }
      </div>

      {/* Content Display */}
      <div className='w-full'> 
        {content === "Notes" && <Files contentData={contentData} />}
        {content === "PYQS" && <Files contentData={contentData} />}
        {content === "Ebooks" && <Files contentData={contentData} />}
        {content === "PPTs" && <Files contentData={contentData} />}
        {content === "Youtube Playlists" && <Youtube contentData={contentData} />}
        {content === "" && (
          <div className='flex justify-center items-center flex-col w-full my-5 mx-3'>
            <iframe
              src="https://drive.google.com/file/d/1eMnGQeeV4dr-1Hzb1hlu1f0bE0tkNx_L/preview?usp=sharing"
              className="w-3/4 min-w-[400px] h-[600px] rounded-lg shadow-lg"
              allow="autoplay"
              title="PDF Viewer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
