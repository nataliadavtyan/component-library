import React from "react"
import classNames from "classnames"
import {
    FaCircleCheck,
    FaTriangleExclamation,
    FaCircleXmark,
    FaCircleInfo
} from "react-icons/fa6"
import { IconContext } from "react-icons"

export default function Banner({ children, status = "neutral" }) {
    const allClasses = classNames('banner', status)

    const heading = status === "success" ? 
            {text: "Congratulations!",
            icon: <FaCircleCheck />} :
        status === "warning" ? 
            {text: "Attention",
            icon: <FaTriangleExclamation />} :
        status === "error" ? 
            {text: "There is a problem with your application",
            icon: <FaCircleXmark />} :
        status === "neutral" ? 
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