import React, {useState} from "react";

const Form = (props) => {
    //state variables
    const [firstName, setFirstName] = useState("");
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [lastName, setLastName] = useState("");
    const [lastNameValid, setLastNameValid] = useState(true);
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

    const createUser = (e) => {

        e.preventDefault();

        //resets inputs after form is submitted
        setFirstName("");
        setFirstNameValid(true);
        setLastName("");
        setLastNameValid(true);
        setEmail("");
        setEmailValid(true);
        setPassword("");
        setPasswordValid(true);
        setConfirmPassword("");
        setConfirmPasswordValid(true);
    }

    const isAtLeastLength = (value, length) => {
        if(value.length >= length)
            return true;

        return false;
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setFirstNameValid(isAtLeastLength(e.target.value, 2));
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        setLastNameValid(isAtLeastLength(e.target.value, 2));
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailValid(isAtLeastLength(e.target.value, 5));
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordValid(isAtLeastLength(e.target.value, 8));
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

        if (passwordValid && e.target.value == password) {
            setConfirmPasswordValid(true);
        }
        else {
            setConfirmPasswordValid(false);
        }
    }

    return(
        <div >
            <h2>Form:</h2>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} value={firstName}/>
                    <p style={{display: firstNameValid ? 'none' : 'block'}}>
                        First name must be at least 2 characters!
                    </p>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} value={lastName}/>
                    <p style={{display: lastNameValid ? 'none' : 'block'}}>
                        Last name must be at least 2 characters!
                    </p>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={handleEmail} value={email}/>
                    <p style={{display: emailValid ? 'none' : 'block'}}>
                        Email must be at least 5 characters!
                    </p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} value={password}/>
                    <p style={{display: passwordValid ? 'none' : 'block'}}>
                        Password must be at least 8 characters!
                    </p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handleConfirmPassword} value={confirmPassword}/>
                    <p style={{display: confirmPasswordValid ? 'none' : 'block'}}>
                        Confirm password must match password!
                    </p>
                </div>
                <button>Submit</button>
                <div>
                <h2>Your Form Data:</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
                </div>
            </form>
            </div>
    );
}

export default Form;