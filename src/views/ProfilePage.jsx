import NavBar from "../components/reused/NavBar";

const ProfilePage = ({ user }) => {
  user = user[0];

  return (
    <>
      <NavBar icon={true} nav={"log out"} />
      {user.username}
      <ul>
        {user.translations.map((translation) => (
          <li className="translation" key={translation}>
            {translation}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfilePage;
