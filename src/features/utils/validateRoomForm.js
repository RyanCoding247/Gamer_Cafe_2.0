export const validateRoomForm = (values) => {
    const errors = {};
    const { firstName, lastName, size, date, startTime, endTime, contactType, phone, email } = values;

    const regNum = /^\d+$/;
    const today = new Date().toISOString().slice(0, 10);
    const militaryTime = (time) => {
        if (time.includes('A')) {
            return parseFloat(time) * 100;
        } else if (time.includes('P')) {
            if (time === '12 PM') {
                return parseFloat(time) * 100;
            } else {
                return (parseFloat(time) + 12) * 100;
            }
        }
    }

    if (!firstName) {
        errors.firstName = 'Required';
    }


    if (!lastName) {
        errors.lastName = 'Required';
    }

    if (!size) {
        errors.size = 'Required';
    } else if (!regNum.test(size)) {
        errors.size = 'Please enter a valid number';
    }

    if (!date) {
        errors.date = 'Required'
    } else if (date <= today) {
        errors.date = 'Please enter a valid future date'
    } else if (date.slice(0, 4) - today.slice(0, 4) > 1) {
        errors.date = 'Please select a less distant date'
    }

    if (!startTime) {
        errors.startTime = 'Required';
    } else if (startTime === 'Select...') {
        errors.startTime = 'Required';
    } else if (militaryTime(startTime) >= militaryTime(endTime)) {
        errors.startTime = 'Check your start and end times';
    }

    if (!endTime) {
        errors.endTime = 'Required';
    } else if (endTime === 'Select...') {
        errors.endTime = 'Required';
    }

    if (contactType === 'phone') {
        if(!phone) {
            errors.phone = 'Required'
        } else if (!regNum.test(phone)) {
            errors.phone = 'Numbers only'
        } else if (phone.length > 15) {
            errors.phone = 'Please enter a valid phone number'
        }
    }
    
    if (contactType === 'email') {
        if (!email) {
            errors.email = 'Required'
        } else if (!email.includes('@')) {
            errors.email = 'Please enter valid email'
        }
    }

    if (!contactType) {
        errors.phone = 'Please select a contact method'
    }

    return errors;
}

//    const today = new Date().toISOString().slice(0, 10); returns today date in yyyy-mm-dd format, same as the vlaue of teh date type input field
