import Navbar from "../components/Navbar"
import FeatureCard from "../components/FeatureCard"
import "../styles/Landing.css"
import BenefitCard from "../components/BenefitCard"
import TestimonialCard from "../components/TestimonialCard"

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

        <section className="testimonials">

            <h2 className="testimonialsTitle">
              Trusted by Professionals
            </h2>

          <div className="testimonialsGrid">

                <TestimonialCard
                  image="https://randomuser.me/api/portraits/men/32.jpg"
                  name="Daniel Roberts"
                  role="Startup Founder"
                  text="FinSight helped me understand my spending patterns and make smarter investment decisions."
                />

                <TestimonialCard
                  image="https://randomuser.me/api/portraits/women/44.jpg"
                  name="Sophia Martinez"
                  role="Financial Analyst"
                  text="The insights and analytics are incredibly clear. It simplified how I track financial performance."
                />

                <TestimonialCard
                  image="https://randomuser.me/api/portraits/men/65.jpg"
                  name="James Carter"
                  role="Small Business Owner"
                  text="FinSight gives me the confidence to plan my finances and grow my investments strategically."
                />

          </div>

      </section>

        <section className="trust">

            <p className="trustTitle">
              Trusted by professionals from leading companies
            </p>

            <div className="trustLogos">
              <span>Stripe</span>
              <span>Shopify</span>
              <span>Notion</span>
              <span>Slack</span>
              <span>Coinbase</span>
            </div>

        </section>

        <footer className="footer">

            <div className="footerContainer">

              <div>
                <h3>FinSight</h3>
                <p>
                  AI powered financial insights to help individuals and businesses make smarter decisions.
                </p>
              </div>

              <div>
                <h3>Product</h3>
                <a href="#">Features</a>
                <a href="#">Analytics</a>
                <a href="#">Investments</a>
              </div>

              <div>
                <h3>Company</h3>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>

              <div>
                <h3>Legal</h3>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>

            </div>

            <div className="footerBottom">
              © 2026 FinSight. All rights reserved.
            </div>

          </footer>

    </div>
  )
}

export default Landing