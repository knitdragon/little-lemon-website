import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";




export default function TestimonialCard({testimonial}) {

  return (
    <div className="testimonial-card">
      <div className="profile">
        <img src={testimonial.image} alt="user profile" />
        <p className="txt-cardTitle " alt="username">{testimonial.name}</p>
      </div>
      <p className="txt-body testimonialMess" alt="user message">{testimonial.message}</p>
      <div className="ratings">
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} opacity={0.5} />
      </div>
    </div>
  );
}
