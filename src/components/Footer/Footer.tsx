import React, { useState, useRef, useEffect } from 'react'
import StarField from '../StarField/StarField'
import './styles.css'

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const [footerHeight, setfooterHeight] = useState<number>(0)

    useEffect(() => {
        const handleResize = () => {
            setfooterHeight(footerRef?.current?.offsetHeight!)
        }
        handleResize();
        // Adding event listener
        window.addEventListener("resize", handleResize);
        // Removing event listener un unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <footer className="footer" ref={footerRef}>
            {footerHeight > 0 &&
                <StarField
                    containerHeight={footerHeight}
                    settings={{
                        'small': { stars: 100, brightPercentage: 25, dimensions: 1, duration: 45 },
                        'medium': { stars: 50, brightPercentage: 15, dimensions: 2, duration: 30 },
                        'large': { stars: 25, brightPercentage: 2, dimensions: 3, duration: 15 }
                    }}
                />
            }
            <div className="footer__info">That's it! <a href="https://github.com/vastolf/vincentastolfi.com">View Source on Github</a></div>
        </footer>
    )
}

export default Footer
