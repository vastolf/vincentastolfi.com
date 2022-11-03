import React from 'react'
import './styles.css'

const Content = (props: {children: JSX.Element | JSX.Element[], id?: string, title?: String, flair?: JSX.Element | JSX.Element[]}) => {
    const {children, id, title, flair} = props;
    return (
        <div id={id} className="content">
            <div className="content__flair-wrapper">
                <h2 className="content__title">{title}</h2>
                <div className="content__flair">
                    {flair}
                </div>
            </div>
            <div className="content__body">
                {children}
            </div>
        </div>
    )
}

export default Content
