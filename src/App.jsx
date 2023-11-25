import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="Registration-container">
          <div className="Registration-title"> 
            <h1> Registration </h1>
          </div>
          <div className="Registration-fields">

            <div className="Registration-field">
              <label for='fname'> First Name </label>
              <input className='Registration-input' type="text" id="fname" name="fname"/>
            </div>
            <div className="Registration-field">
              <label for='lname'> Last Name </label>
              <input className='Registration-input' type="text" id="lname" name="lname"/>
            </div>

            <div className="Registration-field">
              <label for='email'> Email </label>
              <input className='Registration-input' type="text" id="email" name="email"/>
            </div>

            <div className="Registration-field">
              <label for='password'> Password </label>
              <input className='Registration-input' type="password" id="password" name="password"/>
            </div>

            <div className="Registration-field">
              <label for='vpassword'> Verify Password </label>
              <input className='Registration-input' type="password" id="vpassword" name="vpassword"/>
            </div>

            <div for='bday' className="Registration-field">
              <label> Birthday </label>
              <input className='Registration-input' type="text" id="bday" name="bday"/>
            </div>

          </div>
          <button className='Registration-button' type="button">
            <p> Register </p> 
            </button>
          </div>
      </div> 
    </div>
  );
}

export default App;
