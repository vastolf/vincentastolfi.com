import React, { FormEventHandler, useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Section from '../Section/Section'
import SVGIcon from '../SVGIcon/SVGIcon'

const Contact: React.FC = () => {
    return (
        <Section
            id="contact"
            title={"Contact"}
            flair={
                <SVGIcon name="mail" className="section__flair-icon" />
            }
        >
            <div className="contact">
                <p>Please fill out the form below, and I'll recieve an email and text notification from your submission. You should recieve a response in less than 24 hours.</p>
                <ContactForm />
            </div>
        </Section>
    )
}

export default Contact
