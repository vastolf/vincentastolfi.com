import React from 'react'
import Section from '../Section/Section'
import './styles.css'

const Bio = () => {
    
    const calculateAge = (dateString: string) => {
        var date = new Date(dateString);
        // Get month difference 
        var monthsDiff = Date.now() - date.getTime();
        // Get difference of monthsDiff as a date object
        var ageDate = new Date(monthsDiff);
        // Get year from age
        var year = ageDate.getUTCFullYear();
        // Return age
        return Math.abs(year - 1970);
    }
    
    return (
        <Section
            id={"about-me"}
            title={"About Me"}
            flair={
                <img className="bio__image" src="/me.png" alt="A small photo of Vincent" />
            }
        >
            <p>I am a {calculateAge("01/17/1996")}-year-old Developer originally from San Diego, CA, currently based in Costa Rica. Mother tongue is English, but I'm also fluent in Spanish.</p>
            <p>Working remote for the past {calculateAge("12/01/2015")}+ years. Love learning new technologies &amp; solving problems I've never encountered before.</p>
        </Section>
    )
}

export default Bio
