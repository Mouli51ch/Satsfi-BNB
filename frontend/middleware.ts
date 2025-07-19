import { NextResponse } from "next/server";

export default function middleware() {
  // No middleware logic needed
  return NextResponse.next();
}

export const config = {}; 