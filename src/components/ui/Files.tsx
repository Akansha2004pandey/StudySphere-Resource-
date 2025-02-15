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

  return (
    <div className="flex flex-col items-center w-full my-8">
      {/* File Cards */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {data?.map((item: any, index: number) => (
          <Card
            key={index}
            className={`shadow-md border border-gray-300 rounded-xl p-5 min-w-[280px] w-[30%] transition-all duration-300 hover:scale-105 hover:shadow-xl 
            ${selectedIndex === index ? 'bg-[#e0f7fa] border-teal-400' : 'bg-white'}`}
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button 
                variant="default" 
                onClick={() => handleClick(item.link, index)}
                className="px-5 py-2 text-sm font-medium bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600 transition"
              >
                Open PDF
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* PDF Viewer */}
      <div className="mt-12 w-[80%] min-w-[400px] bg-white rounded-lg shadow-lg p-4 border border-gray-300">
        <iframe
          src={contentLink}
          className="w-full h-[600px] rounded-lg shadow-md border border-gray-200"
          allow="autoplay"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default Files;
