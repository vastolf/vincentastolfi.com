import React from 'react'
import Section from '../Section/Section'
import SVGIcon from '../SVGIcon/SVGIcon'
import './styles.css'

const Experience = () => {
    return (
        <Section
            id={"experience"}
            title={"Experience"}
            flair={
                <SVGIcon name="award" className="section__flair-icon" />
            }
            sticky={true}
        >
            <div className="experience__item">
                <h3 className="experience__title">Senior Developer, <a href="https://desarol.com/" target="_blank">Desarol LLC</a></h3>
                <div className="experience__subtitle">2016 - 2022</div>
                <p>I became a Senior Developer at <a href="https://desarol.com/" target="_blank">Desarol</a> starting in 2020, and worked as a Junior in years prior. My main role was to build and manage the website of a major hotel corporation called <a href="https://sonesta.com/" target="_blank">Sonesta</a>.</p>
                <p>We initially built the project in Drupal 7, which we moved to D8, and eventually into React. About a year after the project went headless, I was made the project lead and have been in that role ever since.</p>
                <p id="notable-accomplishments"><strong>Notable accomplishments on this project:</strong></p>
                <ul className="experience__list" aria-describedby="notable-accomplishments">
                    <li>I helped to develop &amp; implement a continuous integration workflow</li>
                    <li>Vastly improved Accessibility, SEO Rankings, and the client's ability to A/B test new features</li>
                    <li>Implemented major performance enhancements that were directly tied to revenue growth</li>
                    <li>Improved backend content editing experience for hundreds of content editors</li>
                    <li>Lead the initiative to combine two major React-based hotel sites into one codebase (including both CMS backends), after Sonesta aquired Red Lion Hotels.</li>
                </ul>
                <p id="notable-projects"><strong>To name some other notable projects I worked on and/or lead for Desarol:</strong></p>
                <ul className="experience__list" aria-describedby="notable-projects">
                    <li>A large chain of cannabis dispensaries, mainly based in Southern California</li>
                    <li>The Gary Johnson Presidential Campaign in 2016 (Libertarian Party Candidate)</li>
                    <li>Various HBCUs (Historically Black Colleges & Universities), including Shorter College and Langston University</li>
                    <li>The biggest Real Estate & Property Management company in Costa Rica, Surfing Nosara</li>
                </ul>
            </div>
            <div className="experience__item">
                <h3 className="experience__title">Freelance Developer</h3>
                <div className="experience__subtitle">2012 - Present</div>
                <p>I've been freelancing since 2012, working with various clients from a plethora of industries. Though my main source of work has obviously been through my previous experience entry, I love challenging myself to try new things &amp; explore new technologies.</p>
                <p id="freelancer-skills"><strong>Some of my strong suits are:</strong></p>
                <ul id="freelancer" className="experience__list" aria-describedby="freelancer-skills">
                    <li>NodeJS, Express, React/React Native, utilizing frameworks such as Gatsby and NextJS for the front end</li>
                    <li>TypeScript / Statically Typed Javascript</li>
                    <li>Ubuntu Server management and maintainence, Shell Scripting, NGINX/Apache, Serverless Functions / Deployment</li>
                    <li>GraphQL, MYSQL, MongoDB, SQLite, Firebase</li>
                    <li>Java, Python, PHP</li>
                    <li>Backend CMS such as WordPress, Drupal, Contentful</li>
                    <li>Google Analytics / Tag Manager (I have an Advanced certificate from Google Analytics Academy), Google Optimize</li>
                </ul>
            </div>
        </Section>
    )
}

export default Experience
