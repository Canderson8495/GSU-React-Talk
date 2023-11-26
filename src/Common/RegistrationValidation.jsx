import {validEmail, nonNumericText,validBirthday, specialChar, hasNumeric} from './Regex'


export const validateName = (name) => {
    if(name === ''){
        return "This name must not be blank"
    }else if(!nonNumericText.test(name)){
        return "This name must not have any numbers"
    }else if(name.length > 24){
        return "The name must not exceed 24 characters"
    }
}

export const validateEmail = (email) => {
    if(email === ''){
        return "Email must not be blank"
    }else if(!validEmail.test(email)){
        return "Email must be a valid email"
    }
}

export const validatePassword = (password) => {
    if(password === ''){
        return "password must not be blank"
    }else if(!specialChar.test(password)){
        return "password must contain special characters"
    }else if(!hasNumeric.test(password)){
        return "password must contain a number"
    }
}

export const validateVerifyPassword = (verifyPassword, password) => {
    if(verifyPassword === ''){
        return "Verify Password must not be blank"
    }else if (verifyPassword !== password){
        console.log(verifyPassword + ' | ' +  password)
        return "Verify Password must be match password"
    }
}

export const validateBirthday = (birthday) => {
    if(birthday === ''){
        return "Birthday must not be blank"
    }else if(!validBirthday.test(birthday)){
        return "Birthday must a sensible MM/DD/YYYY date"
    }
}