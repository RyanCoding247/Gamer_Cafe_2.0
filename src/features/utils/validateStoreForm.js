export const validateStoreForm = (values) => {
    const errors = {};
    const {shirtSize, quantity, color, name, address, city, cardState, zip, cardName, cardNumber, expiration, cvv} = values;

    if (!shirtSize) {
        errors.shirtSize = 'Required';
    }

    const regNum = /^\d+$/;
    const regZip = /^\d{5}$/;

    if(!quantity) {
        errors.quantity = 'Required'
    } else if (!regNum.test(quantity)) {
        errors.quantity = 'Must be a positive whole number'
    }

    if (color === 'Select...') {
        errors.color = 'Select a Color'
    }

    if (!name) {
        errors.name = 'Required';
    }

    if (!address) {
        errors.adress = 'Required';
    }

    if (!city) {
        errors.city = 'Required';
    }

    if (!cardState) {
        errors.cardState = 'Required';
    } else if (cardState.length !== 2) {
        errors.cardState = 'Must be exactly 2 characters'
    }

    if (!zip) {
        errors.zip = 'Required';
    } else if (!regZip.test(zip)) {
        errors.zip = 'Must be 5 digits';
    }

    if (!cardName) {
        errors.cardName = 'Required';
    }

    if (!cardNumber) {
        errors.cardNumber = 'Required';
    } else if (!regNum.test(cardNumber)) {
        errors.cardNumber = 'Only numbers are accepted'
    } else if (cardNumber.length !== 16) {
        errors.cardNumber = 'Must be 16 numbers exactly'
    }

    if (!expiration) {
        errors.expiration = 'Required';
    } else if (!regNum.test(expiration)) {
        errors.expiration = 'Only numbers are accepted'
    } else if (expiration.length !== 4) {
        errors.expiration = 'Please enter 4 numbers in mmyy format'
    }

    if (!cvv) {
        errors.cvv = 'Required';
    } else if (!regNum.test(cvv)) {
        errors.cvv = 'Please enter 3 numbers only'
    } else if (cvv.length !== 3) {
        errors.cvv = 'Please enter 3 numbers only'
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

