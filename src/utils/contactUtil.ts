import axios from "axios"
import { ContactSubmissionResponseProps, ContactFormValuesProps } from "./contactTypes";

const contactSubmission = async (submission: ContactFormValuesProps) : Promise<ContactSubmissionResponseProps | null> => {
    let postReq = await axios.post('/api/contact', {...submission});
    // If the status is not 200, return null
    if (postReq?.status !== 200) return null;
    // If the data doesn't exist OR the length of data object is not 4 (name, email, message, sent), return null
    if (!postReq?.data || Object.keys(postReq?.data)?.length !== 4) return null;
    // Otherwise, return the response data
    return postReq?.data;
}

export default contactSubmission;
