import "./topbar.scss"
import { Person, MailOutline } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Bharat Sharma</a>
          {/*
          <div className="itemContainer">
            <Person className="icon" />
            <span>
              <a href="tel:+919617364333">+91 9617364333</a>
            </span>
          </div>
          */}
          <div className="itemContainer">
            <MailOutline classname="icon" />
            <span>
              <a href="mailto:bharat8717sharma@gmail.com">bharat8717sharma@gmail.com</a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
