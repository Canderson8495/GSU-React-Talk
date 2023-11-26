import './RegistrationField.css'

function RegistrationField(props){

    return (
        <div className="Registration-field">
            <label for={props.name}> {props.labelText} </label> 
            <input placeholder={props.labelText} onChange={props.handler} value={props.data.value} className='Registration-input' type={props.type} id={props.name} name={props.name}/>
            <p className="Registration-error"> {props.data.error}</p>
        </div>
    );
}
export default RegistrationField;