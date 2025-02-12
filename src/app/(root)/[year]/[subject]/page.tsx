"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { getDoc } from '@/lib/actions/delete.action'
import Loader from '@/components/ui/Loader'
import Youtube from '@/components/ui/Youtube'
import Files from '@/components/ui/Files'
const Page = ({ params }: { params: Promise<{ year: string, subject: string }> }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [coursecode, setCoursecode] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [contentData, setContentData] = useState<any>(null);

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
      }
    };
    fetchData();
  }, [params]);

  useEffect(()=>{
    if(content==="Youtube Playlists"){
      setContentData(data.ytPlaylist);
    }
    if(content==="Notes"){
      setContentData(data.notes);
    }
    if(content==="PPTs"){
      setContentData(data.ppts);
    }
    if(content==="Ebooks"){
      setContentData(data.ebooks);
    }   
    if(content==="PYQS"){
      setContentData(data.pyqs);
    }
    console.log(contentData);

  },[content, data])

  if (loading) {
    return <Loader />;
  }
  

  return (
    <div className="flex flex-col items-center w-full  min-h-screen bg-gray-100 px-4 pt-36">
      {/* Course Name */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8">
        {data?.coursename}
      </h1>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 bg-[#073b4c] p-4 rounded-xl shadow-lg">
        {["Ebooks", "PPTs", "Notes", "Youtube Playlists", "PYQS"].map((item, index) => (
          <Button
            key={index}
            variant="custom"
            className="text-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition"
            onClick={()=>setContent(item)}
          >
            {item}
          </Button>
        ))}
      </div>


         <div className='w-full'> 
            
            {content==="Notes" && <Files contentData={contentData} />}
            {content==="PYQS" && <Files contentData={contentData} />}
            {content==="Ebooks" && <Files contentData={contentData} />}
            {content==="PPTs" && <Files contentData={contentData} />}
            {content==="Youtube Playlists" && <Youtube contentData={contentData} />}
            {content==="" && <div className='flex justify-center items-center flex-col w-full my-5'>
            <iframe
       src="https://drive.google.com/file/d/1eMnGQeeV4dr-1Hzb1hlu1f0bE0tkNx_L/preview?usp=sharing "
       className="w-3/4 min-w-[400px] h-[600px] rounded-lg shadow-lg "
       allow="autoplay"
       title="PDF Viewer"
     />
     </div>}
         </div>
      {/* PDF Viewer */}

      {/* <div className="mt-12 w-full max-w-4xl">
        <iframe
          src="https://drive.google.com/file/d/1AT4WntCmqKiSpaYGDP3Ycm3aH7Rkkiqd/preview"
          className="w-full h-[600px] rounded-lg shadow-lg"
          allow="autoplay"
          title="PDF Viewer"
        />
      </div> */}
    </div>
  );
};

export default Page;
