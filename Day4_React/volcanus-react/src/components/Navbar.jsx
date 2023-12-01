import "../assets/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="logo">Logo</div>
        </div>
        <div className="center">
          <button className = "btn btn-danger">No Filter</button>
          <button className = "btn btn-info">Mobiles</button>
          <button className = "btn btn-warning">Laptops</button>
          <button className = "btn btn-success">Wearables</button>
        </div>
        <div className="right">
          <div className="user">User</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
