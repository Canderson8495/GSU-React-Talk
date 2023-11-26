import './RegistrationContainer.css'
import RegistrationField from '../../Components/RegistrationField';
import { useState } from 'react';

function RegistrationContainer() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleFirstNameChange = (event ) => {
        setFirstName(event.target.value);
    }
    const handleLastNameChange = (event ) => {
        setlastName(event.target.value);
    }
    const handleEmailChange = (event ) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event ) => {
        setPassword(event.target.value);
    }
    const handleVerifyPasswordChange = (event ) => {
        setVerifyPassword(event.target.value);
    }
    const handleBirthdayChange = (event ) => {
        setBirthday(event.target.value);
    }

    //HOMEWORK TO AUDIENCE: In your spare time, why don't you try to use the useReducer hook to clean this up and consolidate this?
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
                value={firstName}
            />

            <RegistrationField
                name="lname"
                labelText="Last Name"
                type="text"
                handler={handleLastNameChange}
                value={lastName}
            />

            <RegistrationField
                name="email"
                labelText="Email"
                type="text"
                handler={handleEmailChange}
                value={email}
            />
            
            <RegistrationField
                name="password"
                labelText="Password"
                type="password"
                handler={handlePassword}
                value={password}
            />

            <RegistrationField
                name="vpassword"
                labelText="Verify Password"
                type="password"
                handler={handleVerifyPasswordChange}
                value={verifyPassword}
            />

            <RegistrationField
                name="bday"
                labelText="Birthday"
                type="text"
                handler={handleBirthdayChange}
                value={birthday}
            />

          </div>
          <button className='Registration-button' type="button">
            <p> Register </p> 
            </button>
        </div>
    );

}

export default RegistrationContainer;