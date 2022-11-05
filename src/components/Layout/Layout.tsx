import React from 'react'
import 'normalize.css';
import './styles.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props: {children: JSX.Element | JSX.Element[], hideFooter?: boolean}) => {
    const {children, hideFooter = false} = props;
    
    return (
        <>
            <Header />
                <main id="main" className="main">
                    <div className="layout">
                        {children}
                    </div>
                </main>
            {hideFooter !== true &&
                <Footer />
            }
        </>
        
    )
}

export default Layout
