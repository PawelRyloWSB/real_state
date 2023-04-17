import React from "react";
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left section */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="hero-circle" />
                        <h2>Elevate <br />
                            your Living <br />
                            Experience Today.</h2>
                    </div>
                    <div className="flexColStart hero-description">
                        <span>Welcome to Tomorrow's Living: Cutting-Edge Real Estate for a Futuristic Lifestyle!</span>
                        <span>Discover Next-Gen Homes for a Technologically Advanced Lifestyle!</span>
                    </div>
                </div>
                {/* right section */}
                <div className="hero-right flexCenter">
                    <div className="image-container">
                        <img src="./houseSketch.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
