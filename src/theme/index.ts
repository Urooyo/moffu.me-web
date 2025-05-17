import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#694AFA",
    },
  },
  typography: {
    fontFamily: `'Ownglyph BERRY RW', 'Pretendard JP Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`,
    h1: {
      fontFamily: 'Ownglyph BERRY RW', 
    },
    h2: {
      fontFamily: 'Ownglyph BERRY RW',
    },
    h3: {
      fontFamily: 'Ownglyph PDH',
    },
    h4: {
      fontFamily: 'Ownglyph PDH',
    },
    h5: {
      fontFamily: 'Ownglyph PDH',
    },
    h6: {
      fontFamily: 'Ownglyph PDH',
    },
    button: {
      fontFamily: 'Ownglyph PDH',
      textTransform: 'none',
    },
    body1: {
      fontFamily: 'Ownglyph BERRY RW',
    },
    body2: {
      fontFamily: 'Ownglyph BERRY RW',
    },
  },
  shape: {
    borderRadius: 30,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "var(--background)",
          justifyContent: "center",
          display: "flex",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: "var(--foreground)",
        }
      }
    }
  },
});

export default theme;