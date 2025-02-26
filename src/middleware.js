import { NextResponse } from "next/server";
export function middleware(request) {

    // const path = request.nextUrl.pathname
    // console.log(path);

    const token = request.cookies.get('morfitter-token');
    const adminRoutes = [
        "/admin",
        "/content-management",
        "/sessions",
        "/all-personal-trainer",
        "/user-management",
        "/settings/profile",
        "/settings/privacy-policy",
        "/settings/terms-condition",
    ];

    const isAdminRoute = adminRoutes.some(route => request.nextUrl.pathname.startsWith(route));

    if (!token) {
        const redirectUrl = isAdminRoute ? "/admin-login" : "/auth/login";
        return NextResponse.redirect(new URL(redirectUrl, request.url));
    }

    return NextResponse.next();
}

// export const config = {
//     matcher: [
//         // dashboard
//         '/admin',
//         '/content-management',
//         '/sessions',
//         '/all-personal-trainer',
//         '/user-management',
//         '/settings/profile',
//         '/settings/privacy-policy',
//         '/settings/terms-condition',
//         // website
//         '/find-trainers',
//         '/find-trainers/consultation-result',
//         '/morfitter-pts/:path*',
//         '/morfitter-sessions//:path*',
//         '/trainer-profile',
//         '/trainer-profile/edit-profile',
//         '/trainer-profile/edit-profile/edit-profile-2',
//         '/profile',
//         '/profile/edit-profile',
//         '/profile/edit-profile/edit-profile-2',
//         '/morfitter-sessions',
//     ],
// };
export const config = {
    matcher: [
        '/admin',
        '/content-management',
        '/sessions',
        '/all-personal-trainer',
        '/user-management',
        '/settings/:path*', 
        '/find-trainers/:path*', 
        '/morfitter-pts/:path*',
        '/morfitter-sessions/:path*',
        '/trainer-profile/:path*',
        '/profile/:path*',
    ],
};
