"use client"
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const testt = createTheme({
  palette: {
    primary: {
      main: "#694AFA",
    },
  },
  typography: {
    fontFamily: `'Pretendard JP Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`,
  },
  shape: {
    borderRadius: 40
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
        boxShadow: "none",
        backgroundColor: "var(--background)",
        justifyContent: "center",
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: Array(25).fill("none"),
        }
      }
    },
  },
});

export default function Home() {
  return (
    <Container sx={{ margin: 0, marginX: "auto", paddingX: 2 }}>
      <ThemeProvider theme={testt}>
        <AppBar position="static" sx={{ height: 42, padding: 3 }}>
          <Typography variant="h6" component="div" color="var(--foreground)">앱 바 헤딩</Typography>
        </AppBar>
        <Container sx={{ margin: 0 }}>
          <Typography variant="h1" fontWeight={700}>헤딩</Typography>
          <Typography variant="body1" color="var(--foreground)" marginTop={0.5}>Mui로 간단하게 만들어봤어요.</Typography>
          <Stack direction="row" gap={1} marginTop={2}>
            <Button variant="contained">메인 버튼</Button>
            <Button variant="outlined">아웃라인 버튼</Button>
          </Stack>
        </Container>
      </ThemeProvider>
    </Container>
  );
}