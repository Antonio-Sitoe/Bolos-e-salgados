import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const cookie = req.cookies['token'];

  const path = req.nextUrl.clone();
  path.pathname = '/user';

  if (cookie) {
    
    return NextResponse.redirect(path);
  }
}
