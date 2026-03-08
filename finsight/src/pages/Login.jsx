import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "../styles/Auth.css"

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  const handleChange = (e) => {

    setError("")

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const storedUser = JSON.parse(localStorage.getItem("finsightUser"))

    if (!storedUser) {
      setError("User not found. Please sign up.")
      return
    }

    if (
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", "true")
      navigate("/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }

  return (

    <div className="authContainer">

      <div className="authCard">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {error && <p className="errorMsg">{error}</p>}

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