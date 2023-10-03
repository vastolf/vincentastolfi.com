import React from 'react'
import Section from '../Section/Section'
import SVGIcon from '../SVGIcon/SVGIcon'
import './styles.css'

const References = () => {
    return (
        <Section
            id="references"
            title={"References"}
            flair={
                <SVGIcon name="thumb" className="section__flair-icon" />
            }
        >
            <p>More references are available upon request. You can feel free to contact <a href="https://desarol.com">Desarol</a> with any questions regarding my recent work history.</p>
            <p>If you have any questions or need to reach me for any reason, please use the contact form below, and I'll be responding to you shortly.</p>
        </Section>
    )
}

export default References
