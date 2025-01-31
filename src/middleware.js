import { NextResponse } from "next/server";
export function middleware(request) {

    // const path = request.nextUrl.pathname
    // console.log(path);

    const user = request.cookies.get('morfitter-token');

    if (!user) {

        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        // dashboard
        '/admin',
        '/content-management',
        '/sessions',
        '/all-personal-trainer',
        '/user-management',
        '/settings/profile',
        '/settings/privacy-policy',
        '/settings/terms-condition',
        // website
        '/find-trainers/consultation-result',
        '/morfitter-pts/:path*',
        '/morfitter-sessions/single-session-of-pt/:path*',
    ],
};