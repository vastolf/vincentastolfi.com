export type ContactFormValue = {
    value: string,
    valid: boolean
}

export type ContactFormValuesProps = {
    name: ContactFormValue,
    email: ContactFormValue,
    message: ContactFormValue
}

export type ContactSubmissionResponseProps = {
    name: boolean,
    email: boolean,
    message: boolean,
    sent: boolean
}

export type ContactSubmissionEmailProps = {
    name: string,
    email: string,
    message: string
}