import './RegistrationContainer.css'
import RegistrationField from '../../Components/RegistrationField';
import { useState } from 'react';
import { validateBirthday, validateName, validatePassword, validateVerifyPassword, validateEmail } from '../../Common/RegistrationValidation';
function RegistrationContainer() {

    const [firstName, setFirstName] = useState({value: '', error: ''});
    const [lastName, setLastName] = useState({value: '', error: ''});
    const [email, setEmail] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});
    const [verifyPassword, setVerifyPassword] = useState({value: '', error: ''});
    const [birthday, setBirthday] = useState({value: '', error: ''});

    const handleFirstNameChange = (event ) => {
        setFirstName({value: event.target.value, error: ''});
    }
    const handleLastNameChange = (event ) => {
        setLastName({value: event.target.value, error: ''});
    }
    const handleEmailChange = (event ) => {
        setEmail({value: event.target.value, error: ''});
    }
    const handlePassword = (event ) => {
        setPassword({value: event.target.value, error: ''});
    }
    const handleVerifyPasswordChange = (event ) => {
        setVerifyPassword({value: event.target.value, error: ''});
    }
    const handleBirthdayChange = (event ) => {
        setBirthday({value: event.target.value, error: ''});
    }

    const handleRegisterClick = () => {
        let failed = false;

        let error = validateName(firstName.value)
        if(error !== '' ){
            failed = true
            setFirstName({value: firstName.value, error:error})
        }

        error = validateName(lastName.value)
        if(error !== '' ){
            failed = true
            setLastName({value: lastName.value, error:error})
        }

        error = validateEmail(email.value)
        if(error !== '' ){
            failed = true
            setEmail({value: email.value, error:error})
        }

        error = validatePassword(password.value)
        if(error !== '' ){
            failed = true
            setPassword({value: password.value, error:error})
        }

        error = validateVerifyPassword(verifyPassword.value)
        if(error !==  ''){
            failed = true
            setVerifyPassword({value: verifyPassword.value, error: error})
        }

        error = validateBirthday(verifyPassword.value)
        if(error !==  ''){
            failed = true
            setBirthday({value: birthday.value, error: error})
        }

        if(!failed){
            console.log("Make a POST request here!")
        }

    }

    //HOMEWORK TO AUDIENCE: stage-3 branch | Why don't you try to use the useReducer hook to clean this up and consolidate this?
    return (
        <div className="Registration-container">
          <div className="Registration-title"> 
            <h1> Registration </h1>
          </div>
          <div className="Registration-fields">

            <RegistrationField
                name="fname"
                labelText="First Name"
                type="text"
                handler={handleFirstNameChange}
                data={firstName}
            />

            <RegistrationField
                name="lname"
                labelText="Last Name"
                type="text"
                handler={handleLastNameChange}
                data={lastName}
            />

            <RegistrationField
                name="email"
                labelText="Email"
                type="text"
                handler={handleEmailChange}
                data={email}
            />
            
            <RegistrationField
                name="password"
                labelText="Password"
                type="password"
                handler={handlePassword}
                data={password}
            />

            <RegistrationField
                name="vpassword"
                labelText="Verify Password"
                type="password"
                handler={handleVerifyPasswordChange}
                data={verifyPassword}
            />

            <RegistrationField
                name="bday"
                labelText="Birthday"
                type="text"
                handler={handleBirthdayChange}
                data={birthday}
            />

          </div>
          <button onClick={handleRegisterClick} className='Registration-button' type="button">
            <p> Register </p> 
            </button>
        </div>
    );
}

export default RegistrationContainer;