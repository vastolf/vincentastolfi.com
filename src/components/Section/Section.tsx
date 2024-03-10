import React from 'react'
import { Link } from 'gatsby';
import './styles.css'
import OffsetAnchor from '../OffsetAnchor/OffsetAnchor';

interface ISectionProps {
    children: React.ReactNode,
    id: string,
    title: string,
    flair: React.ReactNode,
    sticky?: boolean
}

const Section: React.FC<ISectionProps> = ({children, id, title, flair, sticky = false}) => {
    return (
        <section className="section">
            <OffsetAnchor id={id} />
            <div className={`section__flair-wrapper ${sticky ? 'section__flair-wrapper-sticky' : ''}`}>
                <h2 className="section__title">
                    <Link to={`#${id}`}>{title}</Link>
                </h2>
                <div className="section__flair">
                    {flair}
                </div>
            </div>
            <div className="section__content">
                {children}
            </div>
        </section>
    )
}

export default Section
