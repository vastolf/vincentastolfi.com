import React, { useState, useEffect } from 'react'
const { vYG, generateStarsBoxShadowsString } = require('../../utils/starUtils');
import './styles.css'

type StarFieldSettingsSizeProps = {
    stars: number,
    brightPercentage: number
}

type StarFieldSettingsSizeKeysProps = {
    [key : string]: StarFieldSettingsSizeProps;
};

// Thanks to Michael Becker for the inspiration for this StarField effect: https://codepen.io/mindsculpt/pen/JJWEJE
const StarField = (props: {marqueeHeight: number}) => {
    const {marqueeHeight} = props;
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [vyg, setVYG] = useState<number>(100);
    // This object controls configuration of the StarField
    // Each size has: # of stars, and the percentage chance that they will be bright
    // There would presumably be more smaller stars, and less big ones, since there are more stars far away from us than 
    // close to us. In reality, they'd also have a smaller chance of being brighter, but we ignore that reality to make 
    // the little stars pop more since they are so harder to see
    const STAR_FIELD_SETTINGS : StarFieldSettingsSizeKeysProps = {
        'small': { stars: 150, brightPercentage: 25 },
        'medium': { stars: 100, brightPercentage: 15 },
        'large': { stars: 50, brightPercentage: 2 }
    }
    
    // Used so we can track the windowWidth & determine what the max X coordinate should be for our box shadows
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        handleResize();
        
        // Adding event listener
        window.addEventListener('resize', handleResize);
        // Removing event listener un unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    
    // Here, we set boxShadows on each size of star. The clone inherits
    // The box shadows and offsets its top value to the marqueeHeight in the styles.css to make the animation seamless
    // windowWidth is always initialized as 0, so if it's greater, we know it's been set properly by the useEffect & therefore
    // we can render the StarField
    return (
        <>
            {(windowWidth > 0) &&
                <div className="star-field">
                    {Object.keys(STAR_FIELD_SETTINGS).map((size : string) => {
                        return <div
                            className={'star-field__'+size}
                            style={{boxShadow : generateStarsBoxShadowsString(
                                marqueeHeight,
                                windowWidth,
                                STAR_FIELD_SETTINGS[size]?.stars,
                                STAR_FIELD_SETTINGS[size]?.brightPercentage)
                            }}
                        >
                            <div className="star-field__clone"></div>
                        </div>
                    })}
                    <img className="star-field__egg" src="/me.png" alt={vYG(vyg, true)} />
                </div>
            }
        </>
    )
}

export default StarField
