import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginForm =() => {
  const {loginUser} = useContext(AuthContext)

  return (
    <form onSubmit={loginUser}>
      <div className="">
        <label htmlFor="username">Username:</label><br />
        <input type="text" name="username" id="username" />
      </div>
      <div className="">
        <label htmlFor="password">Password:</label><br />
        <input type="password" name="password" id="password" />
      </div>
      <input type="submit" value="login" />
    </form>
  );
}

export default LoginForm;
