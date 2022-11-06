import React from 'react'
import { Link } from 'gatsby';
import './styles.css'
import OffsetAnchor from '../OffsetAnchor/OffsetAnchor';

const Section = (props: {children: JSX.Element | JSX.Element[], id: string, title?: String, flair?: JSX.Element | JSX.Element[]}) => {
    const {children, id, title, flair} = props;
    return (
        <section className="section">
            <OffsetAnchor id={id} />
            <div className="section__flair-wrapper">
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
