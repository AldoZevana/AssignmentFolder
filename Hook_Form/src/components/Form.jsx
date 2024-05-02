import React,{useState} from "react";

const FormData =(props)=>{
    const {setRegUser}=props
    const[FirstName,setFirstName]=useState(props.FirstName);
    const[LastName,setLastName]=useState(props.LastName);
    const[Email,setEmail]=useState(props.Email);
    const[Password,setPassword]=useState(props.Password);
    const[c_Password,set_c_Password]=useState(props.c_Password);
    const Register= (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            FirstName: FirstName, 
            LastName: LastName, 
            Email: Email,
            Password: Password,
            c_Password:c_Password
        };
        setRegUser(newUser)
        setEmail("")
        setFirstName("")
        setLastName("")
        setPassword("")
        set_c_Password("")
    }
    return(
        <form onSubmit={Register}>
            <div className="d-flex">
                <label>First Name </label>
                <input type="text" placeholder="FirstName" value={FirstName} onChange={e =>setFirstName(e.target.value)}/>
            </div>
            <div className="d-flex">
                <label>Last Name </label>
                <input type="text" placeholder="LastName" value={LastName} onChange={e =>setLastName(e.target.value)}/>
            </div>
            <div className="d-flex">
                <label>Email </label>
                <input type="text" placeholder="Email" value={Email} onChange={e =>setEmail(e.target.value)}/>
            </div>
            <div className="d-flex">
                <label>Password </label>
                <input type="text" placeholder="Password" value={Password} onChange={e =>setPassword(e.target.value)}/>
            </div>
            <div className="d-flex">
                <label>Confirm Password </label>
                <input type="text" placeholder="Confirm Password" value={c_Password} onChange={e =>set_c_Password(e.target.value)}/>
            </div>
            <input type="submit" value={"Submit"} />
        </form>
        
    )
}
export default FormData;