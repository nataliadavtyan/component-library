import React from "react"
import classNames from "classnames"

export default function Badge({children, color = "gray", shape = "square"}) {
    const allClasses = classNames('badge', color, shape)
    
    return (
        <div className={allClasses}>
            {children}
        </div>
    )
} 