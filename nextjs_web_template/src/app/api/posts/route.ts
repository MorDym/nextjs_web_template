import { NextResponse } from "next/server";
import { adminDb } from "@/app/lib/firebaseAdmin";

// GET – výpis všech postů
export async function GET() {
  try {
    const snapshot = await adminDb.collection("posts").get();
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

// POST – vytvoření nového postu (to už tam máš)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const docRef = await adminDb.collection("posts").add(body);
    return NextResponse.json({ id: docRef.id, ...body });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
