import ProfileSignLanguageHistoryItem from "./ProfileSignLanguageHistoryItem";

const ProfileSignLanguageHistory = ({ orders }) => {
  const orderList = orders.map((order, index) => (
    <ProfileSignLanguageHistoryItem key={index + "-" + order} order={order} />
  ));
  return (
    <section>
      <h4>Your signlanguage history</h4>
      <ul>{orderList}</ul>
    </section>
  );
};
export default ProfileSignLanguageHistory;
