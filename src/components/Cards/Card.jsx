import React from "react"

export default function Card({ icon, children }) {
    return (
        <div className="card">
            {
                icon &&
                    <div className="card-icon">
                        {icon}
                    </div>
            }
            <div className="card-text">
                {children}
            </div>
        </div>
    )
}