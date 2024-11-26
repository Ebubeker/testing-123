import { NextResponse } from "next/server";
import { resend } from "@/lib/utils/resend";

export async function POST(req) {
  try {
    // Parse incoming JSON data
    const data = await req.json();

    // Send email
    const result = await resend.emails.send({
      from: data.email,
      to: "info@rdroofingandchimney.us",
      subject: "New Service Request",
      html: `
        <h3>Service Request Details</h3>
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>State:</strong> ${data.state}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}