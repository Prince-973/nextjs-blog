import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/router";
function Card1(props) {
  const router = useRouter();
  const { id, title, name, description } = props;
  const word = name.split("")[0];
  const date = new Date();
  const formatedDate = date.toISOString().split("T")[0];
  function handleClick() {
    router.push(`/blog/${id}`);
    // console.log(`/blog/${id}`);
  }
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {word}
            </Avatar>
          }
          title={title}
          subheader={formatedDate}
        />
        <CardMedia
          component="img"
          height="194"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYdJVyCJXvqzlr8sWadFj0vXyqgsGM5_AcOb14OtfSIF8S7xd&s"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Card1;
