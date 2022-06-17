import "./topbar.scss"
import { Person, MailOutline } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Bharat Sharma</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 7000192752</span>
          </div>
          <div className="itemContainer">
            <MailOutline classname="icon" />
            <span> bharat8717sharma@gmail.com</span>
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
