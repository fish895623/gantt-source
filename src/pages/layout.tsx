// This is the main layout of our app. It renders the header and the footer.

import React from "react";
import { Link, StyledLink, Layout } from "rakkasjs";
import { Helmet } from "react-helmet-async";

// Vite supports CSS modules out of the box!
import css from "./layout.module.css";

const MainLayout: Layout = ({ error, children }) => (
  <>
    <Helmet title="Rakkas Demo App" />

    <header className={css.header}>
      <Link className={css.logo} href="/">
        Rakkas Demo App
      </Link>

      <nav className={css.nav}>
        <ul>
          <li>
            <StyledLink href="/" activeClass={css.activeLink}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/about" activeClass={css.activeLink}>
              About
            </StyledLink>
          </li>
        </ul>
      </nav>
    </header>

    <section className={css.main}>
      {error ? (
        <main>
          <h1>{error.message}</h1>
        </main>
      ) : (
        children
      )}
    </section>

    <footer className={css.footer}>
      <p>
        Software and documentation: Copyright 2021 Fatih Aygün. MIT License.
      </p>

      <p>
        Favicon: “Flamenco” by{" "}
        <a href="https://thenounproject.com/term/flamenco/111303/">
          gzz from Noun Project
        </a>{" "}
        (not affiliated).
        <br />
        Used under{" "}
        <a href="https://creativecommons.org/licenses/by/2.0/">
          Creative Commons Attribution Generic license (CCBY)
        </a>
      </p>
    </footer>
  </>
);

export default MainLayout;
