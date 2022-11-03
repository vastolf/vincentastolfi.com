import React, { useEffect, useRef, useState } from 'react'
import './styles.css'

const Hero = (props: {title?: string, subtitle?: string}) => {
    const {title, subtitle} = props;
    const heroContentRef = useRef<HTMLDivElement>(null);
    const [heroContentHeight, setHeroContentHeight] = useState<number>(0)
    
    useEffect(() => {
        const handleResize = () => {
            setHeroContentHeight(heroContentRef?.current?.offsetHeight!)
        }
        handleResize();
        // Adding event listener
        window.addEventListener("resize", handleResize);
        // Removing event listener un unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    
    return (
        <section className="hero" >
            <div className="hero__background-wrapper">
                <div className="hero__background"></div>
            </div>
            <div className="hero__content" ref={heroContentRef}>
                <div className="hero__content-interior">
                    <h1 className="hero__heading">{title}</h1>
                    <div className="hero__description">{subtitle}</div>
                </div>
            </div>
        </section>
    )
}

export default Hero
