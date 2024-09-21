import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;
  const userType = request.cookies.get('user_type')?.value;
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/' || path === '/signin' || path === '/signup';

  if (isPublicPath && token) {
    if (userType === '1') {
      return NextResponse.redirect(new URL('/freelancer/', request.url)); // Redirect freelancer
    } else if (userType === '2') {
      return NextResponse.redirect(new URL('/organization/', request.url)); // Redirect organization
    }
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next(); // Proceed if no redirection is needed
}

export const config = {
  matcher: ['/', '/signin', '/signup', '/freelancer/:path*', '/organization/:path*'],
};
