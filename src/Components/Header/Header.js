import React from 'react';
import './Header.css'
import logo from '../../image/logod.png'

const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container">
            {/* logo  */}
            <img className="navbar-brand" src={logo} alt="logo" />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* navbar  */}
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav fw-bold">
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="/Home"
                >
                  Home
                </a>
                <a className="nav-link text-light" href="/Partners">
                  Our Partners
                </a>
                <a className="nav-link text-light" href="/Publications">
                  Publications
                </a>
                <a className="nav-link text-light" href="/involved">
                  Get involved
                </a>
                <a className="nav-link text-light" href="/Contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;