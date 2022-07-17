import "../../css/Navbar.css";
const Navbar = ({ nav, icon }) => {
  return (
    <>
      <div className="container">
        {/* Icon */}
        <div className="icon">{icon ? <button>Home</button> : ""}</div>
        {/* Title */}
        <h3 className="title">Lost In Translation</h3>
        {/* Profile Button */}
        <div className="nav">
          {nav ? <button className="button button1">{nav}</button> : ""}
        </div>
      </div>
    </>
  );
};

export default Navbar;
