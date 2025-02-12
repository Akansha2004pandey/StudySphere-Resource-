import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './button';

const Youtube = ({ contentData }: { contentData: any }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contentData) {
      setData(contentData);
      setLoading(false);
    }
  }, [contentData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center items-center my-5">
      <div className="flex justify-center flex-wrap w-full"> 
        {data?.map((item: any, index: number) => (
          <Card key={index} className="shadow-lg border border-gray-200 rounded-lg p-4 my-2 min-w-[300px] w-1/3  mx-3 ">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button variant="default"><a href={item.link}>Visit Playlist</a></Button>
            </CardContent>
          </Card>
        ))}
        {
          data?.length === 0 && <h1 className="text-lg font-semibold text-gray-600">No Youtube Playlist Found</h1>
        }
      </div>
    </div>
  );
};

export default Youtube;
