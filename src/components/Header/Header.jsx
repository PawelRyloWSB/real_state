import React from "react"
import './Header.css'

export default function Header() {
    return (
        <section className="header-wrapper">
            <div className="flexCenter paddings  innerWidth header-container">
                <img src="./logo RealState.png" alt="Logo" width={100} />
                <div className="header-menu flexCenter">
                    <a href="">
                        Residencies
                    </a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className="button">
                        <a href="">Contact</a>
                    </button>
                </div>
            </div>
        </section>
    )
}