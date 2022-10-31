import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Navigation from '../Navigation/Navigation'
import './styles.css'

const Header = () => {
    const [pageYOffset, setPageYOffset] = useState<number>(0)
    const maxOpacity : number = 85;
    
    useEffect(() => {
        const handleScroll = () => {
            setPageYOffset(window.pageYOffset);
        }
        handleScroll();
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        // Unregister scroll event listener
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    
    return (
        <header className="header" style={{background: "rgb(25 25 25 / " + (pageYOffset >= maxOpacity ? maxOpacity : pageYOffset) + "%)"}}>
            <Link to="/" className="header__heading">{((pageYOffset == 0 || pageYOffset < maxOpacity) ? "VA" : "Vincent Astolfi")}</Link>
            <Navigation />
        </header>
    )
}

export default Header
