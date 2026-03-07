import "../styles/BenefitCard.css"

function BenefitCard({ title, description }) {
  return (
    <div className="benefitCard">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default BenefitCard