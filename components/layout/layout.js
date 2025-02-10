import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              BlogBliss
            </Button>
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit">
          <Link href="/" passHref>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/blog" passHref>
            Blog
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/blog/upload" passHref>
            Upload
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
