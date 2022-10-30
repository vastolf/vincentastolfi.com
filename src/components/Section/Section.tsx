import React from 'react'
import './styles.css'

const Section = (props: {children: JSX.Element | JSX.Element[], id?: string, title?: String, flair?: JSX.Element | JSX.Element[]}) => {
    const {children, id, title, flair} = props;
    return (
        <section id={id} className="section">
            <div className="section__flair-wrapper">
                <h2 className="section__title">{title}</h2>
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
