import React from "react"
import Banner from "./Banner"

export default function Banners() {
    return (
        <main>
            <h2>Banners</h2>
            <div className="banners-container">
                <div>
                    <h3>Success</h3>
                    <Banner status="success">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </Banner>
                    <Banner status="success" />
                </div>
                
                <div>
                    <h3>Warning</h3>
                    <Banner status="warning">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </Banner>
                    <Banner status="warning" />
                </div>

                <div>
                    <h3>Error</h3>
                    <Banner status="error">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </Banner>
                    <Banner status="error" />
                </div>

                <div>
                    <h3>Neutral</h3>
                    <Banner status="neutral">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </Banner>
                    <Banner status="neutral" />
                </div>
            </div>
        </main>
    )
}