import NavBar from "../components/reused/NavBar";

const ProfilePage = ({ user }) => {
  return (
    <>
      <NavBar icon={true} nav={"log out"} />
      <ul>
        {user.map((user) => (
          <li className="user" key={user.username}>
            {user.username}
            <ul>
              {user.translations.map((translation) => (
                <li className="translation" key={translation}>
                  {translation}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfilePage;
