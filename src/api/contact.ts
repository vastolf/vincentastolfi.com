import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import { ContactFormValuesProps, ContactSubmissionResponseProps } from '../utils/contactTypes'
import { nameIsInvalid, emailIsInvalid, messageIsInvalid } from '../utils/validate'
import sendMail from "../utils/mail"

const contact = async (req: GatsbyFunctionRequest<ContactFormValuesProps>, res: GatsbyFunctionResponse) => {
    if (req?.method !== `POST`) {
        res.status(400);
        return;
    }

    const body = req?.body;
    
    let response : ContactSubmissionResponseProps = {
        name: true,
        email: true,
        message: true,
        sent: true
    }

    response.name = !nameIsInvalid(body?.name?.value)
    response.email = !emailIsInvalid(body?.email?.value)
    response.message = !messageIsInvalid(body?.message?.value)

    // If something is invalid, we're going to skip sending the email, setting sent to false and returning
    if (Object.values(response)?.filter((value) => value == false)?.length > 0) {
        response.sent = false;
        res.status(200).json(response);
        return;
    }
    
    // Otherwise, we're going to send the email
    response.sent = await sendMail({name: body?.name?.value, email: body?.email?.value, message: body?.message?.value})

    console.log(response?.sent)

    // Then send the response
    res.status(200).json(response)
};

export default contact;