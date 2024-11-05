import "./styles/Style1.css";
const Login = () => {
  return (
    <>
      <div class="main">
        <div className="s1">
          <h1>Login</h1>
          <form>
            <label>Email</label>
            <input type="email" placeholder="" />
            <label>Password</label>
            <input type="password" placeholder="" />
            <input type="button" value="Submit" />
          </form>
        </div>
        <p className="p1">Not have an account? </p>
        <a href=" ">Sign Up</a>
      </div>
    </>
  );
};
export default Login;
