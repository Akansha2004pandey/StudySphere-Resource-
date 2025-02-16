import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './button';

const Youtube = ({ contentData }: { contentData: any[] }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true); // Always start with loading

    if (contentData && contentData.length > 0) {
      setData(contentData);
    }

    
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  }, [contentData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center items-center my-5">
      <div className="flex justify-center flex-wrap w-full">
        {data.length > 0 ? (
          data.map((item: any, index: number) => (
            <Card key={index} className="shadow-lg border border-gray-200 rounded-lg p-4 my-2 min-w-[300px] w-1/3 mx-3">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button variant="default" className="bg-gray-900 text-white">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Visit Playlist
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <h1 className="text-lg font-semibold text-gray-600">No YouTube Playlist Found</h1>
        )}
      </div>
    </div>
  );
};

export default Youtube;
