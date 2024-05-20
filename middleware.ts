import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const res = NextResponse.next();
    res.headers.append('Access-Control-Allow-Origin', '*');
    return res;
}

export const config = {
    matcher: ['/api/:path*']
}