"use client"
import { Button, Toolbar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
// import { IconButton } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from "@/theme";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AlertDialog from "../component/dialog";

import Link from "next/link";

export default function Home() {
  return (
    <Container sx={{ margin: 0, marginX: "auto", paddingX: 2 }}>
      <ThemeProvider theme={theme}>
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
                <Link href="/">
                  <Button variant="text"><Typography variant="body1">홈</Typography></Button>
                </Link>
                <AlertDialog></AlertDialog>
                <Link href="https://moffu.me/box">
                  <Button variant="text"><Typography variant="body1" color="var(--foreground)">떨굼상자</Typography></Button>
                </Link>
              </div>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Button href="https://moffu.me" target="_blank" rel="noopener noreferrer"><Typography variant="body1" color="var(--foreground)">Moffu.me</Typography></Button>
              <Link href="/">
                <Button variant="text"><Typography variant="h5">♧</Typography></Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        <Container sx={{ margin: 0 }}>
          <Typography variant="body1">환영합니다! 여기는요,</Typography>
          <Typography variant="h2">보랏빛 고양이의 서랍!</Typography>
          <Typography variant="body1" color="var(--foreground)" marginTop={0.5}>Mui로 간단하게 만들어봤어요.</Typography>
          <Stack direction="row" gap={1} marginTop={2}>
            <Button variant="contained" size="medium">메인 버튼</Button>
            <Button variant="outlined" size="medium">아웃라인 버튼</Button>
            <Button variant="text" size="medium">텍스트 버튼</Button>
          </Stack>
        </Container>

        <Stack marginTop={3}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "var(--foreground)" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ background: "var(--background)", color: "var(--foreground)" }}
            >
              <Typography variant="h6" component="span">기존 사이트를 새 사이트 디자인으로 기능만 유지한채 옮기고 있음.</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "var(--background)", color: "var(--foreground)" }}>
              <Typography variant="body1">현재 사이트(moffu.me)는 피그마로 미리 만들고 작업을 한 것도 아니고 오로지 VSCode에서 바로바로 만들었으며 Tailwindcss로 만들어서 앞으로 계속 개선하고 새 기능을 만들 때 css 만큼 번거로우며 규칙을 내가 정해주어야 하다보니 그냥 MUI로 만들기로 했고 피그마로 미리 디자인을 뽑고 작업을 하기로 했어요. 같은 Next.js를 사용하고요.
                <br></br>테스트 주소는 ts1.yume.place예요. 도메인은 꿈의 장소라는 의미를 가지고 있답니다.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "var(--foreground)" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ background: "var(--background)", color: "var(--foreground)" }}
            >
              <Typography variant="h6" component="span">왜 많은 글꼴 중에서 고딕이 아닌 손글씨체로 선택하였을까?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "var(--background)", color: "var(--foreground)" }}>
              <Typography variant="body1">손글씨가 시인성과 가독성은 떨어지지만 moffu.me와 어울리다고 생각하고 개인 사이트이기 때문에 선택함.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "var(--foreground)" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ background: "var(--background)", color: "var(--foreground)" }}
            >
              <Typography variant="h6" component="span">이 사이트를 Github에서 볼 수 있나요?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "var(--background)", color: "var(--foreground)" }}>
              <Button variant="outlined" target="_blank" href="https://github.com/Urooyo/moffu.me-web">보던가?</Button>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </ThemeProvider>
    </Container>
  );
}