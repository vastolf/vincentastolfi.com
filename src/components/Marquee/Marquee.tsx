import React, { useEffect, useRef, useState } from 'react'
import CDNImage from '../CDNImage/CDNImage'
import StarField from '../StarField/StarField'
import SVGIcon from '../SVGIcon/SVGIcon'
import './styles.css'
import { calculateYearsSince } from '../../utils/time'

const Marquee: React.FC = () => {
    const marqueeContentRef = useRef<HTMLDivElement>(null);
    const [marqueeContentHeight, setMarqueeContentHeight] = useState<number>(0)
    
    useEffect(() => {
        const handleResize = () => {
            setMarqueeContentHeight(marqueeContentRef?.current?.offsetHeight!)
        }
        handleResize();
        // Adding event listener
        window.addEventListener("resize", handleResize);
        // Removing event listener un unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    
    return (
        <section className="marquee" >
            <div className="marquee__background-wrapper">
                <div className="marquee__background">
                    <CDNImage className="marquee__background-image" alt="" src="/moon.png" width="500" height="500" />
                </div>
                {(marqueeContentHeight) > 0 &&
                    <StarField containerHeight={marqueeContentHeight} />
                }
            </div>
            <div className="marquee__content" ref={marqueeContentRef}>
                <div className="marquee__content-interior">
                    <h1 className="marquee__heading">Vincent Astolfi</h1>
                    <div className="marquee__description">Full Stack Developer, {calculateYearsSince("01/01/2014")}+ Years Industry Experience</div>
                    <div className="marquee__icons-wrapper">
                        <SVGIcon name="html5" className="marquee__icon" />
                        <SVGIcon name="css3" className="marquee__icon" />
                        <SVGIcon name="nodejs" className="marquee__icon" />
                        <SVGIcon name="reactjs" className="marquee__icon" />
                        <SVGIcon name="ruby" className="marquee__icon" />
                        <SVGIcon name="java" className="marquee__icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marquee
