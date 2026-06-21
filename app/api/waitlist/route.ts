import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

const schema = z.object({
  email: z.email(),
  source: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source } = schema.parse(body);

    const { error } = await supabase
      .from("waitlist")
      .insert({ email, source : source || "unknown" });

    if (error) {
      // Supabase duplicate key violation code
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "You're already on the waitlist." },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}