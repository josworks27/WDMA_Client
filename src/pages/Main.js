import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Main = () => {
  let token = Cookies.get('token');

  return (
    <main>
      <div className="container">
        <section className="main-about">
          <h1>About ANJERI</h1>
          <p className="about__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mollis, dui eu porttitor ornare, elit diam placerat neque, nec
            bibendum elit dolor nec dolor. Nunc in porttitor lorem. Suspendisse
            luctus augue magna, vitae cursus leo ullamcorper id. Quisque quis
            ullamcorper lectus. Cras a semper ante, vel iaculis ipsum. Ut sit
            amet nulla ac mi dapibus maximus sit amet a diam. Quisque sit amet
            tristique erat.
          </p>
        </section>
        <div className="main-link">
          {token ? (
            <button type="button">
              <Link to="/dress">START</Link>
            </button>
          ) : (
            <button type="button">
              <Link to="/signin">Sign In</Link>
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
