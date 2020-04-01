import React from "react";

export const SidebarNav = ({
  currentPage,
  wildType,
  xanthic,
  hypo,
  tminus,
  tplus,
  pied
}) => {
  if (currentPage === "/available-summary") {
    return (
      <div className="side-nav">
        <h3>Jump to...</h3>
        <ul>
          {wildType && (
            <li>
              <a href="#wild-type">Wild Type</a>
            </li>
          )}
          {hypo && (
            <li>
              <a href="#hypo">Hypo</a>
            </li>
          )}
          {tplus && (
            <li>
              <a href="#t+">T +</a>
            </li>
          )}
          {tminus && (
            <li>
              <a href="#t-">T -</a>
            </li>
          )}
          {pied && (
            <li>
              <a href="#pied">Pied</a>
            </li>
          )}
          {xanthic && (
            <li>
              <a href="#xanthic">Xanthic</a>
            </li>
          )}
        </ul>
        <p>
          <a href={currentPage} id="nav">
            Back to top
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="side-nav">
      <h3>Jump to...</h3>
      <ul>
        <li>
          <a href="#wild-type">Wild Type</a>
        </li>
        <li>
          <a href="#hypo">Hypo</a>
        </li>
        <li>
          <a href="#t+">T +</a>
        </li>
        <li>
          <a href="#t-">T -</a>
        </li>
        <li>
          <a href="#pied">Pied</a>
        </li>
        <li>
          <a href="#xanthic">Xanthic</a>
        </li>
      </ul>
      <p>
        <a href={currentPage} id="nav">
          Back to top
        </a>
      </p>
    </div>
  );
};
