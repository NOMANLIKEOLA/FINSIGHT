import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "../styles/Auth.css"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const storedUser = JSON.parse(localStorage.getItem("finsightUser"))

    if (!storedUser) {
      alert("User not found")
      return
    }

    if (email === storedUser.email && password === storedUser.password) {

      localStorage.setItem("isAuthenticated", "true")

      navigate("/dashboard")

    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="authContainer">

      <div className="authCard">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="authBtn">
            Login
          </button>

        </form>

        <div className="authSwitch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>

      </div>

    </div>
  )
}

export default Login