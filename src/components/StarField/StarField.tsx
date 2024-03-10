import React, { useState, useEffect } from 'react'
import CDNImage from '../CDNImage/CDNImage';
const { vYG, generateStarsBoxShadowsString } = require('../../utils/starUtils');
import './styles.css'

interface IStarFieldProps {
    containerHeight: number,
    settings? : StarFieldSettingsSizeKeysProps
}

// We only use these types here so we'll instantiate them directly in the template
type StarFieldSettingsSizeProps = {
    stars: number,
    brightPercentage: number,
    dimensions?: number,
    duration?: number
}

type StarFieldSettingsSizeKeysProps = {
    [key : string]: StarFieldSettingsSizeProps;
};

const defaultSettings : StarFieldSettingsSizeKeysProps = {
    'small': { stars: 150, brightPercentage: 25, dimensions: 1, duration: 180 },
    'medium': { stars: 100, brightPercentage: 15, dimensions: 2, duration: 135 },
    'large': { stars: 50, brightPercentage: 2, dimensions: 3, duration: 90 }
}

// Thanks to Michael Becker for the inspiration for this StarField effect: https://codepen.io/mindsculpt/pen/JJWEJE
const StarField: React.FC<IStarFieldProps> = ({containerHeight, settings = defaultSettings}) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
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
    
    return (
        <>
            {(windowWidth > 0) &&
                <div className="star-field">
                    {Object.keys(settings).map((size : string) => {
                        return <div
                            key={size}
                            className={'star-field__'+size}
                            style={{
                                boxShadow : generateStarsBoxShadowsString(
                                    containerHeight,
                                    windowWidth,
                                    settings[size]?.stars,
                                    settings[size]?.brightPercentage
                                ),
                                transform: `translateY(-${containerHeight}px)`,
                                animationDuration: (settings[size]?.duration) ? `${settings[size]?.duration}s` : '',
                                width: (settings[size]?.dimensions ? settings[size]?.dimensions : ''),
                                height: (settings[size]?.dimensions ? settings[size]?.dimensions : '')
                            }}
                        >
                            <div
                                className="star-field__clone"style={{top : `${containerHeight}px`}}></div>
                        </div>
                    })}
                    <CDNImage
                        className="star-field__egg"
                        src="/me.png"
                        alt={vYG()}
                        width="1"
                        height="1"
                        style={{
                            animationDuration: settings['medium']?.duration ? `${settings['medium']?.duration}s` : '',
                            transform: `translateY(-${containerHeight}px)`,
                        }}
                    />
                </div>
            }
        </>
    )
}

export default StarField
