import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <Link to={"/"}>Home</Link>
      {user ? <p onClick={logoutUser}>Logout</p> : <Link to={"/login"}>Login</Link>}

      <div className="">{user && <p>Hello {user.username}</p>}</div>
    </div>
  );
};

export default Header;
