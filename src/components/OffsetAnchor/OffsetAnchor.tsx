import React from 'react'
import './styles.css'

interface IOffsetAnchorProps {
    id: string
}

const OffsetAnchor: React.FC<IOffsetAnchorProps> = ({id}) => {
    return (
        <div id={id} className="offset-anchor"></div>
    )
}

export default OffsetAnchor
