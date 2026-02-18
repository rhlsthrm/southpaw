import { getPrisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const trimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const prisma = getPrisma();
    await prisma.waitlist.create({ data: { email: trimmed } });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code: string }).code === "P2002"
    ) {
      return NextResponse.json({ success: true });
    }
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const prisma = getPrisma();
    const entries = await prisma.waitlist.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ entries, count: entries.length });
  } catch (err) {
    console.error("Waitlist GET error:", err);
    return NextResponse.json({ error: "Failed to fetch entries" }, { status: 500 });
  }
}
