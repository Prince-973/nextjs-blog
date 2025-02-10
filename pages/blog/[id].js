import React from "react";
import { cardData } from ".";
import Card1 from "@/components/card";
import { Grid } from "@mui/material";

function BlogPost(props) {
  const { title, name, id, description } = props.Post;
  return (
    <>
      <Grid
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
      </Grid>
    </>
  );
}

export default BlogPost;

export async function getStaticProps(context) {
  const { params } = context;
  const postId = parseInt(params.id, 10); // Convert id to number
  const Post = cardData.find((card) => card.id === postId);

  return {
    props: {
      Post,
    },
  };
}

export async function getStaticPaths() {
  const paths = cardData.map((card) => ({
    params: { id: card.id.toString() },
  }));
  // console.log(paths);

  return { paths: paths, fallback: false };
}
