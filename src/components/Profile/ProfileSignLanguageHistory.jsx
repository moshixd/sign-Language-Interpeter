import ProfileSignLanguageHistoryItem from "./ProfileSignLanguageHistoryItem";

const ProfileSignLanguageHistory = ({ orders }) => {
  const orderList = orders.map((order, index) => (
    <ProfileSignLanguageHistoryItem key={index + "-" + order} order={order} />
  ));
  return (
    <section>
      <h4>Your order history</h4>
      <ul>{orderList}</ul>
    </section>
  );
};
export default ProfileSignLanguageHistory;
