import "./Footer.css";

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="global-footer-email">
        <p className="footer-email-title">Sign Up for Pokemon Emails!</p>
        <div className="footer-email-container">
          <div className="footer-email-form">
            <input
              type="email"
              placeholder="Email"
              className="footer-white-box"
            />
            <div className="region_dob_wrap">
              <select
                name=""
                id=""
                className="footer-white-box footer-region-select"
              >
                <option value="US">United States</option>
              </select>
              <input type="text" placeholder="Birthday" />
            </div>
          </div>
          <div className="footer-email-notification-options">
            <p>I would like to receive emails about:</p>
            <div className="footer-email-checkbox-wrapper-1">
              <input type="checkbox" />
              <label htmlFor="">Pokemon video games, apps, and more</label>
            </div>
            <div className="footer-email-checkbox-wrapper-1">
              <input type="checkbox" />
              <label htmlFor="">Pokemon Center</label>
            </div>
            <div className="footer-email-checkbox-wrapper-1">
              <input type="checkbox" />
              <label htmlFor="">
                I accept the Pokemon.com terms of use and privacy policy
              </label>
            </div>
          </div>
        </div>
        <input type="submit" value="SIGN UP" className="footer-email-submit" />
      </div>
      <div className="content-wrapper"></div>
    </footer>
  );
};

export default Footer;
