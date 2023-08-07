import TestimonialCard from "./TestimonialCard";

import profile1 from "../Assets/profile1.jpeg";
import profile2 from "../Assets/profile2.jpeg";
import profile3 from "../Assets/profile3.jpeg";
import profile4 from "../Assets/profile4.jpeg";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Adrian Jose" ,
      image: profile1,
      message: "lorem ipsum dolor"
    },
    {
      id: 2,
      name: "Jose Mo" ,
      image: profile2,
      message: "lorem ipsum dolor"
    },
    {
      id: 3,
      name: "Rian Pho" ,
      image: profile3,
      message: "lorem ipsum dolor"
    },
    {
      id: 4,
      name: "Misha Pho" ,
      image: profile4,
      message: "lorem ipsum dolor"
    },
  ];

  return (
    <div className="testimonials">
      <h2 className="txt-sectionTitle testimonials-title">Testimonials</h2>
      <>
        {testimonials.map((testimonial)=>(<TestimonialCard key={testimonial.id} testimonial={testimonial}/> ))}
      </>

    </div>
  );
}