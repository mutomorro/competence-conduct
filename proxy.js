import { NextResponse } from 'next/server'

export function proxy(request) {
  const { pathname, search } = request.nextUrl
  const subpath = pathname.slice('/ingest'.length)

  const target = subpath.startsWith('/static/')
    ? `https://eu-assets.i.posthog.com${subpath}${search}`
    : `https://eu.i.posthog.com${subpath}${search}`

  return NextResponse.rewrite(target)
}

export const config = {
  matcher: '/ingest/:path*',
}
