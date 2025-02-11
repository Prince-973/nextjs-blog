import { connectDatabase } from "@/lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const { title, name, description } = req.body;
    if (
      !title ||
      !name ||
      !description ||
      title.trim().length === 0 ||
      name.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return res.status(442).json({ message: "Please fill in all fields" });
    }
    const client = await connectDatabase();
    const db = client.db();
    const result = await db.collection("posts").insertOne({
      title,
      name,
      description,
    });
    res.status(201).json({
      result,
      message: "post created successfully",
    });
  }
}

export default handler;
