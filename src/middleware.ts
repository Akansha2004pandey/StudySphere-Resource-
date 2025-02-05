import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export {default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/:path*",
    '/sign-in',
    '/admin/:path*',
    '/admin'
  ],
};

export async function middleware(request: NextRequest) {
    const token=await getToken({ req: request });
    const url=request.nextUrl;
    
    if(!token && url.pathname.startsWith('/admin') ){
        return NextResponse.redirect(new URL('/sign-in',request.url));

    }
    return NextResponse.next();
}