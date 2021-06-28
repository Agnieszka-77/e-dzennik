import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/theme";
import { ThemeProvider } from "styled-components";

const WithoutMenuTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default WithoutMenuTemplate;
