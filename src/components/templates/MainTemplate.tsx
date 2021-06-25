import Navigation from "components/organisms/Navigation/Navigation";
import GlobalStyle from "theme/GlobalStyle";

const MainTemplate: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <div>{children}</div>
    </>
  );
};

export default MainTemplate;
