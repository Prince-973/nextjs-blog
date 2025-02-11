import { cardData } from "@/pages/blog";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Alert,
} from "@mui/material";
import React, { useRef, useState } from "react";

function Form() {
  const name = useRef();
  const description = useRef();
  const title = useRef();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const enteredName = name.current.value;
    const enteredDescription = description.current.value;
    const enteredTitle = title.current.value;

    try {
      const response = await fetch("/api/blogs/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: enteredName,
          description: enteredDescription,
          title: enteredTitle,
        }),
      });
      // console.log(response);

      // cardData.push({
      //   id: cardData.length + 1,
      //   description: enteredDescription,
      //   name: enteredName,
      //   title: enteredTitle,
      // });
      if (!response.ok) {
        throw new Error("Network response was not ok. Try Again later");
      }

      setSuccess(
        "Blog created successfully! & It will be visiable after 10 min."
      );
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 400, p: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom align="center">
              Submit Your Blog
            </Typography>

            {success && (
              <Box sx={{ mb: 2 }}>
                <Alert severity="success">{success}</Alert>
              </Box>
            )}
            {error && (
              <Box sx={{ mb: 2 }}>
                <Alert severity="error">{error}</Alert>
              </Box>
            )}
            <form onSubmit={handleSubmit}>
              <TextField
                inputRef={name}
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                required
              />
              <TextField
                inputRef={title}
                fullWidth
                margin="normal"
                label="Title"
                name="title"
                required
              />
              <TextField
                inputRef={description}
                fullWidth
                margin="normal"
                label="Description"
                name="description"
                required
                multiline
                rows={4}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Form;
