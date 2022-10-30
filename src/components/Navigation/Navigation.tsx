import React from 'react'
import SVGIcon from '../SVGIcon/SVGIcon'
import './styles.css'

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__list-item">
                    <a title="vastolf Github" aria-label="Github" className="navigation__link" href="https://github.com/vastolf" target="_blank">
                        <SVGIcon name="github" className="navigation__link-icon" />
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a title="Contact Vincent" aria-label="Contact Vincent" className="navigation__link" href="#contact">
                        <SVGIcon name="mail" className="navigation__link-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
