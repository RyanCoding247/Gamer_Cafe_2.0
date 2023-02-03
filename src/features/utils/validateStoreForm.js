export const validateStoreForm = (values) => {
    const errors = {};

    if (!values.shirtSize) {
        errors.shirtSize = 'Required';
    }

    return errors;
}

//example code for using regEx below
    // const reg = /^\d+$/;
    // if (!reg.test(phoneNum)) {
    //     errors.phoneNum = 'The phone number should contain only numbers.';
    // } else if (phoneNum.length < 7) {
    //     errors.phoneNum = 'Your phone number is too short. Please check your entry.';
    // } else if (phoneNum.length > 15) {
    //     errors.phoneNum = 'Your phone number is too long. Please check your entry.';
    // }

