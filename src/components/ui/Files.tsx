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
    <>
    <div className="flex justify-center items-center flex-col w-full my-5">
      <div className="flex justify-center flex-wrap w-full">

        {data?.map((item: any, index: number) => (
          <Card
            key={index}
            className={`shadow-lg border border-gray-200 rounded-lg p-4 my-2 min-w-[300px] w-1/3 mx-3 ${selectedIndex === index ? 'bg-[#c0ffed] ' : ''}`} // Apply a different background color for the selected card
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button variant="default" onClick={() => handleClick(item.link, index)}>
                Visit Pdf
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
     <div className="mt-12 w-3/4 min-w-[400px]">
     <iframe
       src={contentLink}
       className="w-full h-[600px] rounded-lg shadow-lg"
       allow="autoplay"
       title="PDF Viewer"
     />
   </div>
     </div>
   
   </>
  );
};

export default Files;
