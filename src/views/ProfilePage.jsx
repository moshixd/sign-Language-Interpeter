import Navbar from "../components/Navbar/Navbar";
// import ProfileAction from "../components/Profile/ProfileAction";
// import ProfileHeader from "../components/Profile/ProfileHeader";
// import ProfileSignLanguageHistory from "../components/Profile/ProfileSignLanguageHistory";
// import { useUser } from "../context/UserContext";
// import withAuth from "../hoc/withAuth";

const ProfilePage = ({ props }) => {
  console.log(props);
  // const { user } = useUser();
  return (
    <>
      <Navbar icon={true} nav={"log out"} />
      {props[0]}
      {/* 
      {
        <ul>
          {props.users.map((user) => (
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
      } */}
      {/* { <ProfileHeader username={users.username} />
      <ProfileAction />
      <ProfileSignLanguageHistory orders={user.orders} /> */}
    </>
  );
};

// export default withAuth(ProfilePage);
export default ProfilePage;
