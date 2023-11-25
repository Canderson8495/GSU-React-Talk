import './RegistrationField.css'

function RegistrationField(props){
    return (
        <div className="Registration-field">
            <label for={props.name}> {props.labelText} </label>
            <input className='Registration-input' type={props.type} id={props.name} name={props.name}/>
        </div>
    );
}
export default RegistrationField;