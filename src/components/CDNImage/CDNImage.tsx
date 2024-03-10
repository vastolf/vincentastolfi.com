import React from 'react'

interface ICDNImageProps {
    src: string;
    className: string;
    alt: string;
    width?: string;
    height?: string;
    style?: React.CSSProperties;
}

const CDNImage: React.FC<ICDNImageProps> = ({src, className, alt, width, height, style}) => {
    const imageHostPrefix = (src.indexOf('/') === 0 ? 'https://vincentastolfi.com' : '')
    const imageURLPrefix = (process.env.NODE_ENV === 'production') ? 'https://res.cloudinary.com/vastolf/image/fetch/f_auto/'+imageHostPrefix : '';
    
    return (
        <img
            className={className}
            alt={alt}
            src={imageURLPrefix + src}
            width={width}
            height={height}
            style={style}
        />
    )
}

export default CDNImage
