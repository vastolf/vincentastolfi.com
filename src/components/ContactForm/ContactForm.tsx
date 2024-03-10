import React, { useState } from 'react'
import Button from '../Button/Button'
import FormTextField from '../FormTextField/FormTextField'
import './styles.css'
import { ContactFormValuesProps, ContactSubmissionResponseProps } from '../../utils/contactTypes'
import { nameIsInvalid, emailIsInvalid, messageIsInvalid } from '../../utils/validate'
import { contactSubmission } from '../../utils/contactUtil';

const ContactForm: React.FC = () => {
    const NAME_ERROR_MESSAGE : string = "Must be between 3 and 30 characters"
    const EMAIL_ERROR_MESSAGE : string = "Please enter a valid email address"
    const MESSAGE_ERROR_MESSAGE : string = "Must be between 3 and 1000 characters"
    const SUBMIT_ERROR_MESSAGE : string = "There seems to be an error with your submission; please review the fields above."
    const RES_ERROR_MESSAGE : string = "There was a problem processing your submission & the message was unable to be sent; please try again."
    const SUBMIT_SUCCESS_MESSAGE : string = "Thank you for your submission! You should be recieving a response shortly."
    const DEFAULT_FORM_VALUES : ContactFormValuesProps = {
        name: {value: "", valid: true},
        email: {value: "", valid: true},
        message: {value: "", valid: true}
    }
    const [formValues, setFormValues] = useState<ContactFormValuesProps>(DEFAULT_FORM_VALUES);
    const [editing, setEditing] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [resError, setResError] = useState<boolean>(false);

    // Fields have different validation, so we must check them individually.
    // We could probably reduce the repetativeness of this by using the field name as a key & just using
    // A map of keys -> validation function; this if fine for now though
    const handleInput = (event : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) : void => {
        setEditing(true);
        setResError(false);
        switch (event?.target?.name) {
            case "name":
                updateIndividualFormValue({name: {value: event.target.value, valid: !nameIsInvalid(event.target.value)}})
                break;
            case "email":
                updateIndividualFormValue({email: {value: event.target.value, valid: !emailIsInvalid(event.target.value)}})
                break;
            case "message":
                updateIndividualFormValue({message: {value: event.target.value, valid: !messageIsInvalid(event.target.value)}})
                break;
        }
    }

    const updateIndividualFormValue = (update : object) : void => {
        setFormValues((existing: ContactFormValuesProps) => ({
            ...existing,
            ...update
        }))
    }

    const anyFieldIsInvalid = () : boolean => {
        return (!formValues?.name?.valid || !formValues?.email?.valid || !formValues?.message?.valid)
    }

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) : Promise<void> => {
        event.preventDefault();
        if (loading) return
        // Set editing to false so we can show the error / success messages
        setEditing(false)
        // Return if any fields have errors so we don't clear their values and they can fix them before submitting again
        if (anyFieldIsInvalid()) return;
        // Set loading to true to prevent multiple accidental submissions
        setLoading(true)
        // Get response from submission
        let response : ContactSubmissionResponseProps | null = await contactSubmission(formValues);
        // Set loading to false to allow access to form fields again
        setLoading(false);
        // If it's null, there is a response error; setResError to true and return
        if (response === null) {
            setResError(true);
            return;
        }
        // Otherwise clear the form "value" params and update their "valid" param based on response
        Object.entries(response).forEach((entry) => {
            let key = entry[0];
            let val = entry[1];
            
            // We track sent separately
            if (key == "sent") {
                // setResError to inverse of "sent" boolean value (if sent is false, we want resError to be true)
                setResError(!val);
                return;
            }
            
            // Otherwise we update the form field value
            updateIndividualFormValue({[key] : {value: "", valid: val}})
        })
    }

    const submitIndicatorClass = (!editing && !loading) ? (anyFieldIsInvalid() || resError) ? " contact-form__submit-indicator-invalid" :  " contact-form__submit-indicator-valid" : ''

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <FormTextField
                label="Name"
                name="name"
                errorMessage={NAME_ERROR_MESSAGE}
                value={formValues?.name?.value}
                valid={formValues?.name?.valid}
                required={true}
                onTextInputChange={handleInput}
                disabled={loading}
            />
            <FormTextField
                label="Email"
                name="email"
                errorMessage={EMAIL_ERROR_MESSAGE}
                value={formValues?.email?.value}
                valid={formValues?.email?.valid}
                required={true}
                onTextInputChange={handleInput}
                disabled={loading}
            />
            <FormTextField
                type="textarea"
                label="Message"
                name="message"
                errorMessage={MESSAGE_ERROR_MESSAGE}
                value={formValues?.message?.value}
                valid={formValues?.message?.valid}
                required={true}
                onTextAreaChange={handleInput}
                disabled={loading}
            />
            <div
                className={"contact-form__submit-indicator"+submitIndicatorClass}
                role="alert"
                aria-atomic="true"
            >
                {(!loading && !editing) ? anyFieldIsInvalid() ? SUBMIT_ERROR_MESSAGE : (resError ? RES_ERROR_MESSAGE :  SUBMIT_SUCCESS_MESSAGE) : ''}
            </div>
            <Button disabled={loading || anyFieldIsInvalid()} ariaLabel="Submit Contact Form" className="contact-form__submit" >{<>Submit</>}</Button>
        </form>
    )
}

export default ContactForm