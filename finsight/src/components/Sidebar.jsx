import { Link, Navigate } from "react-router-dom"
import "../styles/Dashboard.css"

function Sidebar() {

  return (

    <div className="sidebar">

      <Link to="/" className="logoLink">
            <h2>FinSight</h2>
      </Link>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="#">Analytics</Link>
      <Link to="#">Investments</Link>
      <Link to="#">Goals</Link>
      <Link to="#">Settings</Link>

    </div>

  )
}

export default Sidebar