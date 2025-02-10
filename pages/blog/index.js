// import { Card } from "@mui/material";
import CardGrid from "@/components/cards";
import React from "react";

function BlogsPage(props) {
  return (
    <>
      <CardGrid cardData={props.cardData} />
    </>
  );
}

export default BlogsPage;
export const cardData = [
  {
    id: 1,
    title: "This is Blog 1",
    name: "Prince",
    description:
      "Hey, check this out! This is my first blog. It's about coding.",
  },
  {
    id: 2,
    title: "Learning React",
    name: "John Doe",
    description:
      "Discover the basics of React and how to build amazing UI components.",
  },
  {
    id: 3,
    title: "Travel Diaries",
    name: "Jane Smith",
    description:
      "Sharing my travel experiences and tips for visiting beautiful destinations.",
  },
  {
    id: 4,
    title: "Healthy Living",
    name: "Alex Green",
    description:
      "A guide to a healthier lifestyle with nutritious recipes and fitness tips.",
  },
  {
    id: 5,
    title: "Photography Tips",
    name: "Emily Brown",
    description:
      "Learn how to capture stunning photos with these easy-to-follow tips.",
  },
  {
    id: 6,
    title: "Photography Tips",
    name: "Emily Brown",
    description:
      "Learn how to capture stunning photos with these easy-to-follow tips.",
  },
  {
    id: 7,
    title: "Photography Tips",
    name: "Emily Brown",
    description:
      "Learn how to capture stunning photos with these easy-to-follow tips.",
  },
];
export async function getStaticProps() {
  return {
    props: {
      cardData,
    },
  };
}
