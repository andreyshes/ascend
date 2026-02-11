import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/app/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ApplicationSchema = z.object({
	full_name: z.string().min(2, "Full name must be at least 2 characters"),
	email: z.string().email("Invalid email format"),
	goal: z.string(),
	experience_level: z.string(),
	commitment_level: z.string(),
	message: z.string().max(1000).optional(),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const result = ApplicationSchema.safeParse(body);

		if (!result.success) {
			return NextResponse.json(
				{
					success: false,
					errors: result.error.flatten().fieldErrors,
				},
				{ status: 400 },
			);
		}

		const data = result.data;

		// 1️⃣ Save to database
		const application = await prisma.application.create({
			data,
		});

		// 2️⃣ Send notification email to YOU
		await resend.emails.send({
			from: "ASCEND <onboarding@resend.dev>", 
			to: "ascendd.now@gmail.com", // ← PUT YOUR REAL EMAIL HERE
			replyTo: data.email,
			subject: "New ASCEND Application",
			html: `
        <h2>New Application Submitted</h2>
        <p><strong>Name:</strong> ${data.full_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Goal:</strong> ${data.goal}</p>
        <p><strong>Experience:</strong> ${data.experience_level}</p>
        <p><strong>Commitment:</strong> ${data.commitment_level}</p>
        <p><strong>Message:</strong> ${data.message || "None"}</p>
      `,
		});

		// 3️⃣ Send confirmation email to applicant
		await resend.emails.send({
			from: "ASCEND <onboarding@resend.dev>",
			to: data.email,
			subject: "Application Received — ASCEND",
			html: `
        <h2>Transmission Received</h2>
        <p>Hi ${data.full_name},</p>
        <p>Your application has been received and is under review.</p>
        <p>You can expect a response within 48 hours.</p>
        <br/>
        <p>— ASCEND</p>
      `,
		});

		return NextResponse.json({
			success: true,
			id: application.id,
		});
	} catch (error) {
		console.error("API Error:", error);

		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}

export async function GET() {
	try {
		const applications = await prisma.application.findMany({
			orderBy: { createdAt: "desc" },
		});

		return NextResponse.json(applications);
	} catch {
		return NextResponse.json(
			{ error: "Failed to fetch applications" },
			{ status: 500 },
		);
	}
}
