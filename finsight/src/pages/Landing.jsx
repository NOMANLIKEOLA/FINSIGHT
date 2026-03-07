import Navbar from "../components/Navbar"
import FeatureCard from "../components/FeatureCard"
import "../styles/Landing.css"

function Landing() {
  return (
    <div>

      <Navbar />

      <section className="hero">
        <h1>AI Powered Financial Intelligence</h1>

        <p>
          Track spending, analyze investments, and make smarter financial decisions with FinSight.
        </p>

        <div className="heroButtons">
          <button className="primaryBtn">Start Free Trial</button>
          <button className="secondaryBtn">Explore Features</button>
        </div>
      </section>


      <section className="features">

        <h2 className="featuresTitle">
          Powerful Financial Tools
        </h2>

        <div className="featuresGrid">

          <FeatureCard
            title="AI Investment Insights"
            description="Get intelligent investment recommendations powered by advanced financial analytics."
          />

          <FeatureCard
            title="Expense Analytics"
            description="Understand your spending habits with clear and powerful expense insights."
          />

          <FeatureCard
            title="Smart Budget Planner"
            description="Plan your finances efficiently and maintain control of your monthly budget."
          />

          <FeatureCard
            title="Market Trend Summaries"
            description="Stay ahead with simplified summaries of market trends and opportunities."
          />

        </div>

      </section>

    </div>
  )
}

export default Landing