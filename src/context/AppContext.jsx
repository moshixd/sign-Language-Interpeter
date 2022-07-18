import UserProvider from "./UserContext";

const AppContext = ({ children }) => {
  console.log("children", children);
  return <UserProvider>{children}</UserProvider>;
};
export default AppContext;