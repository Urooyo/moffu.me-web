"use client"
import { Button, Stack, Toolbar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import AlertDialog from "./dialog";

import Link from "next/link";
import { Roboto_Flex } from "next/font/google";


export default function AppBarUI() {
  return (
    <div>
      <div>
        <Box>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: 'var(--foreground)' }}
                >
                  <MenuIcon />
              </IconButton> */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} color="var(--foreground)">
                  Moffu
                </Typography>
                <Box display={"flex"} gap={1.2} alignItems={"center"} marginLeft={3}>
                  <Link href="/">
                    <Typography variant="body1" color="var(--foreground)">홈</Typography>
                  </Link>
                  <AlertDialog></AlertDialog>
                  <Link href="https://moffu.me/box">
                    <Typography variant="body1" color="var(--foreground)">떨굼상자</Typography>
                  </Link>
                </Box>
              </div>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Button href="https://moffu.me" target="_blank" rel="noopener noreferrer"><Typography variant="body1" color="var(--foreground)">Moffu.me</Typography></Button>
              <Link href="/"> 
                <Button variant="text"><Typography variant="h5">♧</Typography></Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}