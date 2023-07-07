//import React from 'react';//
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
      <section>
        <div className="container">
          <div className="text-center">
            <div className="error-font-black">
              4<span className="error-font-blue">0</span>4
            </div>
            <h3>Ooops, Page Not Found</h3>
            <p>
              We’re sorry but we can’t seem to find the page you requested. This
              might be because you have typed the web address incorrectly.
            </p>
            <Link className="" to="/">
              <button className="bg-primary-color text-white">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
};

export default NotFound;