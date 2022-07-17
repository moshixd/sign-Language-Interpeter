import NavBar from "../components/reused/NavBar";

const TranslationPage = ({ user }) => {
  console.log("translation page:", user);
  return (
    <>
      <NavBar nav={"profile page"} />
    </>
  );
};

export default TranslationPage;
