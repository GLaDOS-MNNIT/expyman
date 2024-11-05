import React from "react";
import "./styles/MainPage.css";
const MainPage = () => {
  return (
    <>
      <div className="heading">
        <h1>Expyman</h1>
      </div>
      <div className="image">
        <div className="para">
          <p>
            Master the art of budgeting and keep your financial world in
            balance.
          </p>
        </div>
        <div className="sign">
          <button className="signup">SIGNUP</button>
          <br></br>
          <p className="login">Already have an account? </p>
          <a className="login2" href=" ">
            Login
          </a>
        </div>
      </div>

      <h1 className="one">Features</h1>
      <div className="last">
        <p className="first">
          Offer a sleek dark mode option for comfortable viewing in low-light
          environments, enhancing user experience
        </p>
        <p className="second">
          Implement a secure vault feature for user to store and oragnise their
          expense receipts,making record-keeping easier.
        </p>
        <p className="third">
          Enable users to manage expenses in multiple currencies with real time
          exchange rates for seamless travel budgeting.
        </p>
        <p className="four">
          Allow users to export detailed expense reports in various formats for
          easy sharing and anlysis.
        </p>
        <p className="five">
          Get notified of recurring bills and transactions before the due date.
        </p>
      </div>
    </>
  );
};

export default MainPage;
