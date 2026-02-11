import { NextResponse } from "next/server";
import { z } from "zod";

const ApplicationSchema = z.object({
	email: z.email("Invalid email format"),
	full_name: z.string().min(2, "Full name must be at least 2 characters"),
	phone: z.string().optional(),
	message: z.string().max(1000).optional(),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();

		// Validate with Zod
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

		const validatedData = result.data;

		// Future integrations go here
		// await db.application.create({ data: validatedData });

		console.log("Transmission Successful:", validatedData);

		return NextResponse.json({
			success: true,
			message: "Application logged in system architecture.",
		});
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
