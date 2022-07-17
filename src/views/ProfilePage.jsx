import Navbar from "../components/Navbar/Navbar";
import ProfileAction from "../components/Profile/ProfileAction";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileSignLanguageHistory from "../components/Profile/ProfileSignLanguageHistory";
import { useUser } from "../context/UserContext";

const ProfilePage = () => {
  return (
    <>
      <h1>Profile</h1>
      <Navbar icon={true} nav={"log out"} />
      <ProfileHeader username={user.username} />
      <ProfileAction />
      <ProfileSignLanguageHistory orders={user.orders} />
    </>
  );
};

export default ProfilePage;
