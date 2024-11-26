'use client'

import Link from "next/link"
import { useState } from "react"
import Brand1 from "./Brand1"

export default function Banner1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <section className="banner-area">
                {/* <div className="banner-shape" data-background="/assets/img/banner/banner_shape.jpg" /> */}
                <div className="banner-shape" data-background="/assets/img/banner/banner_shape.png" />
                <div className="banner-bg" data-background="/assets/img/banner/banner_bg.jpg">
                    <div className="banner-content">
                        <h2 className="title wow fadeInDown" data-wow-delay=".2s">Quality you can count on</h2>
                        <p className="wow fadeInUp" data-wow-delay=".2s">Where Renovation Dreams Take Dreams Take Flight Over New Jersey Skies</p>
                        <Link href="/projects" className="btn wow fadeInUp" data-wow-delay=".4s">Our Projects</Link>
                    </div>
                </div>
                {/* brand-area */}
                <Brand1 />
                {/* brand-area-end */}
            </section>

        </>
    )
}
