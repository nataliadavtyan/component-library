import React from "react"
import classNames from "classnames"
import {
    FaCircleCheck,
    FaTriangleExclamation,
    FaCircleXmark,
    FaCircleInfo
} from "react-icons/fa6"
import { IconContext } from "react-icons"

export default function Banner({ children, variant = "neutral" }) {
    const allClasses = classNames('banner', variant)

    const heading = variant === "success" ? 
            {text: "Congratulations!",
            icon: <FaCircleCheck />} :
        variant === "warning" ? 
            {text: "Attention",
            icon: <FaTriangleExclamation />} :
        variant === "error" ? 
            {text: "There is a problem with your application",
            icon: <FaCircleXmark />} :
        variant === "neutral" ? 
            {text: "Update available",
            icon: <FaCircleInfo />} : ""

    return (
        <div className={allClasses}>
            <IconContext.Provider value={{ className: "icon", size: "1rem"}}>
                {heading.icon}
            </IconContext.Provider>
            <h4>{heading.text}</h4>
            {children && children}
        </div>
    )
}