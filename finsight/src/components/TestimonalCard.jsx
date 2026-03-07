import "../styles/TestimonialCard.css"

function TestimonialCard({ image, name, role, text }) {
  return (
    <div className="testimonialCard">

      <p className="testimonialText">
        {text}
      </p>

      <div className="testimonialUser">

        <img src={image} alt={name} />

        <div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>

      </div>

    </div>
  )
}

export default TestimonialCard