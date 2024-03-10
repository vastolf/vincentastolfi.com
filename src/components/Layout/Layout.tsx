import React from 'react'
import 'normalize.css';
import './styles.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface ILayoutProps {
    children: React.ReactNode,
    hideFooter?: boolean
}

const Layout: React.FC<ILayoutProps> = ({children, hideFooter = false}) => {
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
