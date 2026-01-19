import { NextResponse } from 'next/server';

export default function proxy(request) {
	const path = request.nextUrl.pathname;
	const isProtected = path === '/add-item';
	const token = request.cookies.get('auth_token')?.value;

	if (isProtected && !token) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/add-item'],
};