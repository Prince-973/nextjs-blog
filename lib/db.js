import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://prinsvaghasiyait21:Prince832004@cluster0.01ztk.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  );
  return client;
}
