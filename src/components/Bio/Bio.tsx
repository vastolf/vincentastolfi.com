import React from 'react'
import Section from '../Section/Section'
import CDNImage from '../CDNImage/CDNImage'
import './styles.css'
import { calculateYearsSince } from '../../utils/time'

const Bio: React.FC = () => {
    return (
        <Section
            id={"about-me"}
            title={"About Me"}
            flair={
                <CDNImage className="bio__image" src="/me.png" alt="A small photo of Vincent" width="67" height="81" />
            }
        >
            <p>I am a {calculateYearsSince("01/17/1996")}-year-old Developer originally from San Diego, CA, currently based in Costa Rica. Mother tongue is English, but I'm also fluent in Spanish.</p>
            <p>Working remote for the past {calculateYearsSince("12/01/2015")}+ years. Love learning new technologies &amp; solving problems I've never encountered before.</p>
        </Section>
    )
}

export default Bio
