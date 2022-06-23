import { NextRequest, NextResponse } from 'next/server';
import { GET_USERDATA } from '../../services/Api.ts';

export async function middleware(req: NextRequest) {
  const cookie = req.cookies['token'];

  const path = req.nextUrl.clone();
  path.pathname = '/login';

  if (!cookie) {
    return NextResponse.redirect(path);
  }
  try {
    const { url, options } = GET_USERDATA(cookie);
    const response = await fetch(url, options);
    const user = await response.json();

    if (user.error) {
      return NextResponse.redirect(path);
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(path);
  }
}
