export const nameIsInvalid = (name: string) : boolean => {
    if (name.length < 3 || name.length >= 25) return true;
    return false;
}

export const emailIsInvalid = (email: string) : boolean => {
    return (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) || email.length > 50);
}

export const messageIsInvalid = (message: string) : boolean => {
    if (message.length < 3 || message.length >= 1000) return true;
    return false;
}