
import React from 'react'

const page = async ({params}:{params:Promise<{subject:string}>}) => {
    const { subject}=await params;
    console.log( subject);
  return (
    <div>
       subjects
       {subject}
    </div>
  )
}

export default page
