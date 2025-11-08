import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer bg-dark text-white py-3"
      style={{
        backgroundColor: "#343a40",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Section */}
          <div className="col-md-8 mb-3 mb-md-0">
            <p className="mb-0 opacity-75">
              © {currentYear} <strong>Sofia</strong>. All rights reserved. Built
              with ❤️ using <span className="text-info">React & Bootstrap</span>.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-md-4 text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 align-items-center">
              <button
                type="button"
                className="btn btn-link text-light opacity-75 small text-decoration-none p-0"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="btn btn-link text-light opacity-75 small text-decoration-none p-0"
              >
                Terms of Service
              </button>

              <button
                onClick={scrollToTop}
                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px" }}
              >
                <i className="bi bi-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
