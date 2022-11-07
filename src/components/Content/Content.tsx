import React from 'react'
import './styles.css'

const Content = (props: {children: JSX.Element | JSX.Element[], id?: string}) => {
    const {children, id} = props;
    return (
        <div id={id} className="content">
            <div className="content__body">
                {children}
            </div>
        </div>
    )
}

export default Content
