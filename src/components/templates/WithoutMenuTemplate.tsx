import GlobalStyle from "theme/GlobalStyle";
const WithoutMenuTemplate: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default WithoutMenuTemplate;
