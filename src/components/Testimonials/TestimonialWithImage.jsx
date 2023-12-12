import React from "react"
import { FaQuoteLeft } from "react-icons/fa6";

export default function TestimonialWithImage({ background = "blue", image, children }) {

    console.log(image)
    return (
        <div className={`testimonial testimonial-full testimonial-${background}`}>

            <div className="testimonial-image-container">
                <img src={image} alt="" /> 
            </div>


            <div className="testimonial-text">
                <div className="testimonial-icon">
                    <FaQuoteLeft />
                </div>
                {children}
            </div>

        </div>
    )
}