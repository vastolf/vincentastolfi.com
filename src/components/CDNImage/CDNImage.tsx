import React from 'react'

const CDNImage = (props: {src: string, className: string, alt: string, width?: string, height?: string}) => {
    const {src, className, alt, width, height} = props
    const imageHostPrefix = (src.indexOf('/') === 0 ? 'https://vincentastolfi.com' : '')
    const imageURLPrefix = (process.env.NODE_ENV === 'production') ? 'https://res.cloudinary.com/vastolf/image/fetch/f_auto/'+imageHostPrefix : '';
    
    return (
        <img className={className} alt={alt} src={imageURLPrefix + src} width={width} height={height} />
    )
}

export default CDNImage
