import React from "react";
import Card1 from "@/components/card";
import { Grid2 } from "@mui/material";
import { connectDatabase } from "@/lib/db";
import Head from "next/head";

function BlogPost(props) {
  const { title, name, id, description } = props.Post;
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Specific Blog" />
      </Head>
      <Grid2
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card1 title={title} id={id} name={name} description={description} />;
      </Grid2>
    </>
  );
}

export default BlogPost;

export async function getStaticProps(context) {
  const { params } = context;
  const postId = parseInt(params.id, 10); // Convert id to number
  const client = await connectDatabase();
  const db = client.db();
  const posts = await db.collection("posts").find({}).toArray();
  const serializedPosts = posts.map((post, ind) => ({
    ...post,
    id: ind,
    _id: post._id.toString(), // Convert ObjectId to string
  }));
  const Post = serializedPosts.find((card) => card.id === postId);

  return {
    props: {
      Post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const client = await connectDatabase();
  const db = client.db();
  const posts = await db.collection("posts").find({}).toArray();
  const serializedPosts = posts.map((post, ind) => ({
    ...post,
    id: ind,
    _id: post._id.toString(), // Convert ObjectId to string
  }));
  const paths = serializedPosts.map((card) => ({
    params: { id: card.id.toString() },
  }));
  // console.log(paths);

  return { paths: paths, fallback: "blocking" };
}
