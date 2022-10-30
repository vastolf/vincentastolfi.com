import { Link } from 'gatsby'
import React, { useRef, useState, useEffect } from 'react'
import StarField from '../StarField/StarField'
import './styles.css'

const NotFound = () => {
    const notFoundRef = useRef<HTMLDivElement>(null);
    const [notFoundHeight, setNotFoundHeight] = useState<number>(0)

    useEffect(() => {
        const handleResize = () => {
            setNotFoundHeight(notFoundRef?.current?.offsetHeight!)
        }
        handleResize();
        // Adding event listener
        window.addEventListener("resize", handleResize);
        // Removing event listener un unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div className="not-found__wrapper" ref={notFoundRef}>
            {notFoundHeight > 0 &&
                <StarField marqueeHeight={notFoundHeight}/>
            }
            <div className="not-found">
                <h1 className="not-found__heading">Uh-oh! Looks like you're lost</h1>
                <div className="not-found__sub-heading">404: This site only has one page, so let's get you back on track</div>
                <Link aria-label={"Return to home page"} className="not-found__button" to={"/"} >Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound
