import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import './Residencies.css'

export default function Residencies() {
    return (
        <section className="res-wrapper">
            <div className="paddings innerWidth res-container">
                <div className="res-head flexColStart">
                    <span className="small-head-span">Best Choices</span>
                    <span className="big-head-span">Popular Residencies</span>
                </div>
                <Swiper >
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i} >
                                <div className="res-card flexColStart">
                                    <img src={card.image} alt="house" />

                                    <span className="secondaryText res-price">
                                        <span style={{ color: "orangered" }}>$</span><span>{card.price}</span>
                                    </span>

                                    <span className="big-head-span card-name">{card.name}</span>
                                    <span className="card-detail">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}