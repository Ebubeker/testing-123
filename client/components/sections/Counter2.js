'use client';

import { useEffect, useState } from 'react'
import CountUp from "../elements/CountUp"

import counterIcon01 from '@/assets/images/icon/counter_icon01.svg';
import counterIcon02 from '@/assets/images/icon/counter_icon02.svg';

import Image from 'next/image';

export default function Counter2() {
    const [inViewport, setInViewport] = useState(false)

    const handleScroll = () => {
        const elements = document.getElementsByClassName('count')
        if (elements.length > 0) {
            const element = elements[0]
            const rect = element.getBoundingClientRect()
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
            if (isInViewport && !inViewport) {
                setInViewport(true)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <div className="counter-area-two">
                <div className="container">
                    <div className="counter-inner wow fadeInUp" data-wow-delay=".2s">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="counter-item-two">
                                    <div className="counter-icon">
                                        <Image src={counterIcon01} alt="Counter Icon 01" />
                                    </div>
                                    <div className="counter-content">
                                        {inViewport && <CountUp end={2300} duration={1} />}
                                        <p>Project Complete</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item-two">
                                    <div className="counter-icon">
                                        <Image src={counterIcon02} alt="Counter Icon 02" />
                                    </div>
                                    <div className="counter-content">
                                        <span className="count"/>
                                        {inViewport && <CountUp end={2100} duration={1} />}
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
