import React from "react"
import { FaInfo } from "react-icons/fa6";

export default function Card({ icon = <FaInfo />, children }) {
    return (
        <div className="card">
            <div className="card-icon">
                {icon}
            </div>
            <div className="card-text">
                {children}
            </div>
        </div>
    )
}