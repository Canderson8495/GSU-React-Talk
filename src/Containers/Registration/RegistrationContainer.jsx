import './RegistrationContainer.css'

import RegistrationField from '../../Components/RegistrationField';

function RegistrationContainer() {

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
            />

            <RegistrationField
                name="lname"
                labelText="Last Name"
                type="text"
            />

            <RegistrationField
                name="email"
                labelText="Email"
                type="text"
            />
            
            <RegistrationField
                name="password"
                labelText="Password"
                type="password"
            />

            <RegistrationField
                name="vpassword"
                labelText="Verify Password"
                type="password"
            />

            <RegistrationField
                name="bday"
                labelText="Birthday"
                type="text"
            />

          </div>
          <button className='Registration-button' type="button">
            <p> Register </p> 
            </button>
        </div>
    );

}

export default RegistrationContainer;