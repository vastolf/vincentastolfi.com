import React from 'react'
import 'normalize.css';
import './styles.css'

const Layout = (props: {children: JSX.Element | JSX.Element[]}) => {
    const children = props?.children;
    return (
        <main className="main">
            <div className="layout">
                {children}
            </div>
        </main>
    )
}

export default Layout
