import { Link } from "react-router-dom"
import "../styles/Landing.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FinSight</h2>

      <div className="navlinks">
        <Link to="/login">Login</Link>
        <Link to="/signup" className="cta">Get Started</Link>
      </div>
    </nav>
  )
}

export default Navbar