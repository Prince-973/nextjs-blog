// import { Card } from "@mui/material";
import CardGrid from "@/components/cards";
import { connectDatabase } from "@/lib/db";
import Head from "next/head";
import React from "react";

function BlogsPage(props) {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="All the blogs" />
      </Head>
      <CardGrid cardData={props.cardData} />
    </>
  );
}

export default BlogsPage;
export async function getStaticProps() {
  const client = await connectDatabase();
  const db = client.db();
  const posts = await db.collection("posts").find({}).toArray();
  const serializedPosts = posts.map((post, ind) => ({
    ...post,
    id: ind,
    _id: post._id.toString(), // Convert ObjectId to string
  }));
  //   console.log(serializedPosts);

  return {
    props: {
      cardData: serializedPosts,
    },
    revalidate: 600,
  };
}
