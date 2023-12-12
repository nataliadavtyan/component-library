import React from "react"
import Card from "./Card"
import { FaCloudArrowUp } from "react-icons/fa6";

export default function Cards() {
    return (
        <main>
            <h2>Cards</h2>
            <div className="cards-container">
                <Card icon={<FaCloudArrowUp />}>
                    <h4>Easy Deployment</h4>
                    <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </Card>

                <Card>
                    <h4>Easy Deployment</h4>
                    <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </Card>
                <p>Hover over a card to see the hover effect</p>
            </div>
        </main>
    )
}