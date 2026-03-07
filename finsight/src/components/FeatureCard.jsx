import "../styles/FeatureCard.css"

function FeatureCard({ title, description }) {
  return (
    <div className="featureCard">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard