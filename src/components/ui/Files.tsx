import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './button';

const Files = ({ contentData }: { contentData: any }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [contentLink, setContentLink] = useState<string>("https://drive.google.com/file/d/1eMnGQeeV4dr-1Hzb1hlu1f0bE0tkNx_L/preview?usp=sharing");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (contentData) {
      setData(contentData);
      setLoading(false);
    }
  }, [contentData]);

  if (loading) {
    return <Loader />;
  }

  const handleClick = (link: string, index: number) => {
    const newLink = link.replace('view', 'preview');
    setContentLink(newLink);
    setSelectedIndex(index); 
  };

  const handleDownload = (link: string) => {
    const fileIdMatch = link.match(/\/d\/(.*?)\//);
    if (fileIdMatch && fileIdMatch[1]) {
      const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
      const anchor = document.createElement('a');
      anchor.href = directDownloadLink;
      anchor.download = "file.pdf"; 
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } else {
      alert("Invalid download link");
    }
  };

  return (
    <div className="flex flex-col items-center w-full my-8 px-4">
      {/* File Cards */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {data?.map((item: any, index: number) => (
          <Card
            key={index}
            className={`shadow-md border border-gray-400 rounded-xl p-5 w-full sm:w-[48%] lg:w-[30%] transition-all duration-300 hover:scale-105 hover:shadow-xl 
            ${selectedIndex === index ? 'bg-gray-200' : 'bg-white'}`}
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-3">
              <Button 
                variant="default" 
                onClick={() => handleClick(item.link, index)}
                className="px-5 py-2 text-sm font-medium bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-800 transition"
              >
                Open PDF
              </Button>
          
              <Button 
                variant="default" 
                onClick={() => handleDownload(item.link)}
                className="px-5 py-2 text-sm font-medium bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-700 transition"
              >
                Download PDF
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* PDF Viewer */}
      <div className="mt-12 w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-700">
        <iframe
          src={contentLink}
          className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg shadow-md border border-gray-300"
          allow="autoplay"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default Files;