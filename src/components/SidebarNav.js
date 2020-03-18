import React from "react";

export const SidebarNav = () => {
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
    </div>
  );
};