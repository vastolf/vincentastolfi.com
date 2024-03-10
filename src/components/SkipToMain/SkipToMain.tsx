import React from 'react'
import { Link } from 'gatsby'
import './styles.css'

const SkipToMain: React.FC = () => {
    return (
        <Link className="skip-to-main" to="#main">Skip To Main Content</Link>
    )
}

export default SkipToMain
