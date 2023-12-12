import React from "react"

export default function TestimonialNoImage({ logo, background = "white", children }) {
    return (
        <div className={`testimonial testimonial-empty testimonial-${background}`}>
            {
                logo && 
                    <div className="testimonial-logo">
                        <img src={logo} />
                    </div>
            }
            <div className="testimonial-text">
                {children}
            </div>
        </div>
    )
}