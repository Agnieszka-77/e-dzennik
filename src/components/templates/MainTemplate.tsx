import Navigation from "components/organisms/Navigation/Navigation";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/theme";

const MainTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default MainTemplate;
