import React from 'react'
import './portfolioList.scss'

export default function PortfolioList({ id, link, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {link}
      {title}
    </li>
  );
}
