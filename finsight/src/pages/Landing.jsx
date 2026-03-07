import Navbar from "../components/Navbar"
import FeatureCard from "../components/FeatureCard"
import "../styles/Landing.css"
import BenefitCard from "../components/BenefitCard"

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

      <section className="benefits">

            <h2 className="benefitsTitle">
              Why Choose FinSight
            </h2>

            <div className="benefitsGrid">

                  <BenefitCard
                    title="Smarter Financial Planning"
                    description="Make confident financial decisions using intelligent analytics and insights."
                  />

                  <BenefitCard
                    title="Clear Spending Insights"
                    description="Understand exactly where your money goes with powerful expense tracking."
                  />

                  <BenefitCard
                    title="Better Investment Decisions"
                    description="Use data driven insights to identify opportunities and grow your portfolio."
                  />

            </div>

      </section>

    </div>
  )
}

export default Landing