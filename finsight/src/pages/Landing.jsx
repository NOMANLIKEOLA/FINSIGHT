import Navbar from "../components/Navbar"
import "../styles/Landing.css"

function Landing() {
  return (
    <div>

      <Navbar />

      <section className="hero">

            <h1>
              AI Powered Financial Intelligence
            </h1>

            <p>
              Track your spending, analyze investments, and make smarter financial decisions with FinSight.
            </p>

            <div className="heroButtons">
              <button className="primaryBtn">
                Start Free Trial
              </button>

              <button className="secondaryBtn">
                Explore Features
              </button>
            </div>

      </section>

    </div>
  )
}

export default Landing