import { useNavigate } from "react-router-dom"

function Dashboard() {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("isAuthenticated")

    navigate("/login")
  }

  return (

    <div style={{ padding: "40px" }}>

      <h1>FinSight Dashboard</h1>

      <p>Welcome to your financial dashboard.</p>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>

  )
}

export default Dashboard