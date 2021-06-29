import Navigation from "components/organisms/Navigation/Navigation";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/theme";

const Wrapper = styled.main`
  margin-left: calc(30% + 20px);
`;

const MainTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
};

export default MainTemplate;
