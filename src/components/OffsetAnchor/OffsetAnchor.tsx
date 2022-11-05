import React from 'react'
import './styles.css'

const OffsetAnchor = (props: {id: string}) => {
    const {id} = props;
    
    return (
        <div id={id} className="offset-anchor"></div>
    )
}

export default OffsetAnchor
