import "./Style.css";
const SignUp = () => {
  return (
    <>
      <div class="main">
        <div className="s1">
          <h1>Sign Up</h1>
          <form>
            <label>Name</label>
            <input type="text" placeholder="" />
            <label>Email</label>
            <input type="email" placeholder="" />
            <label>Password</label>
            <input type="password" placeholder="" />
            <label>Confirm Password</label>
            <input type="password" placeholder="" />
            <input type="button" value="Submit" />
          </form>
        </div>
        <p className="p1">Already have an account? </p>
        <a href=" ">Login</a>
      </div>
    </>
  );
};
export default SignUp;
