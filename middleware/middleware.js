import { NextResponse } from "next/server";

const session_cookie = '__session';

export function middleware(req) {

    const { pathname } = req.nextUrl;
    const hasSession = req.cookies.get(session_cookie);

    const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register');
    const isProtected = pathname.startsWith('/dashboard');

    if (isAuthPage && hasSession) {
        const url = req.nextUrl.clone();
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
    }

    if (isProtected && !hasSession) {
        const url = req.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/login', '/register'],
};
