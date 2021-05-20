import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Playfair Display', serif;
}

.active-link{
  font-weight: 400;
  color: #fff !important;
}

.slide {
  opacity: 0;
  transition-duration: 1s ease;
}

.slide.active {
  opacity: 1;
  transition-duration: 2s;
  transform: scale(1.08);
}

.pt-2 {
  padding-top: 1rem;
}

`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
