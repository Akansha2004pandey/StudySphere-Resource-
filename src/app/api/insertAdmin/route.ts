import { NextResponse } from 'next/server'
import { insertTestDocument } from '@/lib/actions/user.action'
export async function POST(request: Request) {
    try{
        await insertTestDocument();
        return NextResponse.json({message:"Admin Inserted Successfully"});
    }catch(err){
        return NextResponse.json({message:"Error inserting admin",status:500});
    }

}
