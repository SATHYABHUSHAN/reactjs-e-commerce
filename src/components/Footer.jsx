import React from "react";

const Footer = () => {
  return (
    <footer className="mb-0 text-center">
      <div className="d-flex align-items-center justify-content-center pb-5">
        <div className="col-md-6">
          <p className="mb-3 mb-md-0">
            Made with ❤️ by SATHYABHUSHAN M N<br/>
            B.E. in ECE from BMS College of Engineering, Passing in 2024<br/>
            Gmail: <a href="mailto:sathyabhushanmn@gmail.com">sathyabhushanmn@gmail.com</a><br/>
            Phone: +91-7624811356
          </p>
          <a className="text-dark fs-4" href="https://github.com/SATHYABHUSHAN" target="_blank" rel="noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

