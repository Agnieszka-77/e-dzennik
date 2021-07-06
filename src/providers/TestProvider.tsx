import WithoutMenuTemplate from "components/templates/WithoutMenuTemplate";
import UserProvider from "./UserProvider";

const TestProvider: React.FC = ({ children }) => (
  <UserProvider>
    <WithoutMenuTemplate>{children}</WithoutMenuTemplate>
  </UserProvider>
);
export default TestProvider;
