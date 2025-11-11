import { NextResponse } from "next/server";

export function middleware(req) {

    const token = req.cookies.get("authToken")?.value
    const path = req.nextUrl.pathname;
    const isAuthPage = ['/login', '/register'].includes(path);
    const isDashboard = path.startsWith('/dashboard');

    if (!token && isDashboard) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    if (token && isAuthPage) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/login', '/register'],
};
