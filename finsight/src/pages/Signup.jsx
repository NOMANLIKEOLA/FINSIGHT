import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "../styles/Auth.css"

function Signup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }

    localStorage.setItem("finsightUser", JSON.stringify(user))

    navigate("/dashboard")
  }

  return (
    <div className="authContainer">

      <div className="authCard">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <button className="authBtn">
            Sign Up
          </button>

        </form>

        <div className="authSwitch">
          Already have an account? <Link to="/login">Login</Link>
        </div>

      </div>

    </div>
  )
}

export default Signup