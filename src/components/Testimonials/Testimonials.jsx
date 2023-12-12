import React from "react"
import TestimonialWithImage from "./TestimonialWithImage"
import TestimonialNoImage from "./TestimonialNoImage"
import image from "../../assets/images/component-library-testimonial-image.jpeg"
import logo from "../../assets/images/testimonial-logo.png"

export default function Testimonials() {
    return (
        <main>
            <h2>Testimonials</h2>
            <div className="testimonials">
                <h3>With pic</h3>
                <TestimonialWithImage 
                    image={image}
                    background="blue"
                >
                    <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
                    <h4>May Andersons</h4>
                    <p>Workcation, CTO</p>
                </TestimonialWithImage>

                <h3>No pic</h3>
                <TestimonialNoImage
                    logo={logo}
                    background="white"
                >
                    <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
                    <h4>May Andersons</h4>
                    <p className="half-opacity">Workcation, CTO</p>
                </TestimonialNoImage>
            </div>
        </main>
    )
}