import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../scss/main.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children, navbarBackground, currentPage }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />{" "} */}

        <link
          rel="icon"
          href={`${withPrefix("/")}img/boas-logo2.svg`}
          sizes="any"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/STCfavicon.png`}
          sizes="32x32"
        />

        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/STCfavicon.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/STCfavicon.png`}
          color="#ff4400"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/STCfavicon.png`}
        />
      </Helmet>
      <Navbar navbarBackground={navbarBackground} currentPage={currentPage} />
      <div className="layout-container">{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
