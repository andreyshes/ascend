import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();

	console.log("User navigated to:", body.page);


	return NextResponse.json({ success: true });
}