import Navigation from "components/organisms/Navigation/Navigation";

const MainTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
};

export default MainTemplate;
