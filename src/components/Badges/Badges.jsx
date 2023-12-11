import React from "react"
import Badge from "./Badge"

export default function Badges() {
    return (
        <main>
            <h2>Badges</h2>
            <div className="badges-container">
                <div className="badges-square-row">
                    <h3>Square</h3>
                    <Badge shape="square" color="gray">Gray</Badge>
                    <Badge shape="square" color="red">Red</Badge>
                    <Badge shape="square" color="yellow">Yellow</Badge>
                    <Badge shape="square" color="green">Green</Badge>
                    <Badge shape="square" color="blue">Blue</Badge>
                    <Badge shape="square" color="indigo">Indigo</Badge>
                    <Badge shape="square" color="purple">Purple</Badge>
                    <Badge shape="square" color="pink">Pink</Badge>
                </div>
                <div className="badges-pill-row">
                    <h3>Pill</h3>
                    <Badge shape="pill" color="gray">Gray</Badge>
                    <Badge shape="pill" color="red">Red</Badge>
                    <Badge shape="pill" color="yellow">Yellow</Badge>
                    <Badge shape="pill" color="green">Green</Badge>
                    <Badge shape="pill" color="blue">Blue</Badge>
                    <Badge shape="pill" color="indigo">Indigo</Badge>
                    <Badge shape="pill" color="purple">Purple</Badge>
                    <Badge shape="pill" color="pink">Pink</Badge>
                </div>
            </div>
        </main>
    )
}