import React from 'react'
import './Testimonials.css'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'

const reviews = [
  {
    name: 'Temi Francis.', role: 'Brand Owner', image: user_1,
    quote: 'Working with Bold Angel Agency transformed the way our brand communicates. Their creativity, professionalism, and attention to detail helped us stand out and connect better with our audience.'
  },
  {
    name: 'Paul Uchechukwu.', role: 'Entrepreneur', image: user_2,
    quote: 'The team understood our vision from day one and brought it to life beautifully. From branding to media content, everything was delivered with excellence.'
  },
  {
    name: 'Grace Asamua', role: 'Founder', image: user_3,
    quote: 'Bold Angel Agency doesn\u2019t just create designs, they tell stories that leave lasting impressions. Their strategic approach gave our business a fresh and modern identity.'
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-inner">
        <div className="testimonials-intro">
          <span className="testimonials-eyebrow">Testimonials</span>
          <h2 id="testimonials-heading">What Our<br />Customers Say</h2>
          <p>Bold ideas. Meaningful partnerships. Hear how we help our clients bring their brands to life.</p>
        </div>
        <div className="testimonials-cards" id="testimonial-cards">
          {reviews.map((review, index) => (
            <figure className={`testimonial-card${index === 1 ? ' testimonial-card-featured' : ''}`} key={review.name}>
              <img className="testimonial-avatar" src={review.image} alt="" loading="lazy" />
              <span className="testimonial-quote-mark" aria-hidden="true">&rdquo;</span>
              <figcaption>
                <div><h3>{review.name}</h3><span>{review.role}</span></div>
              </figcaption>
              <blockquote><p>{review.quote}</p></blockquote>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
