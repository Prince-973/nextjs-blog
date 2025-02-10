import Form from "@/components/Form";
import Head from "next/head";
import React from "react";

function UploadBlog() {
  return (
    <>
      <Head>
        <title>Upload Blog</title>
        <meta name="description" content="Upload Blog" />
      </Head>
      <Form />
    </>
  );
}

export default UploadBlog;
