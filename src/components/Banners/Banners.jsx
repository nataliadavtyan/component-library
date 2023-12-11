import React from "react"
import Banner from "./Banner"

export default function Banners() {
    return (
        <main>
            <h2>Banners</h2>
            <div className="banners-container">
                <div>
                    <h3>Success</h3>
                    <Banner variant="success">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </Banner>
                    <Banner variant="success" />
                </div>
                
                <div>
                    <h3>Warning</h3>
                    <Banner variant="warning">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </Banner>
                    <Banner variant="warning" />
                </div>

                <div>
                    <h3>Error</h3>
                    <Banner variant="error">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </Banner>
                    <Banner variant="error" />
                </div>

                <div>
                    <h3>Neutral</h3>
                    <Banner variant="neutral">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </Banner>
                    <Banner variant="neutral" />
                </div>
            </div>
        </main>
    )
}