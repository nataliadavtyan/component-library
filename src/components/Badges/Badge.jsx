import React from "react"
import classNames from "classnames"

export default function Badge({children, color, shape}) {
    const allClasses = classNames('badge', color, shape)
    // console.log(allClasses)

    return (
        <div className={allClasses}>
            {children}
        </div>
    )
} 