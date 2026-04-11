import { useState } from "react";

const useFormValidation =()=> {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[showPassword, setShowPassword] = useState(false)
    const[error, setError] = useState({})

    const loginLogic = ()=> {
        let errors = {}

        if(!email) errors.email = "Email is required"
           else if(!email.includes('@')) errors.email = "Invalid Email"

        if(!password) errors.password = "Password is required" 
           else if(password.length < 6) errors.password = "Password too short"   
           else if(password.length > 24) errors.password = "Password too long"

       return errors    
    }

    const togglePassword = ()=> {
         setShowPassword((prev) => !prev)

    }

    
    const handleSubmit = (e)=> {
         e.preventDefault()
         const validateError = loginLogic()
         setError(validateError)

         if(Object.keys(validateError).length > 0) return

         alert("Successfully Logged In!✅")
    }

    return {loginLogic, showPassword, handleSubmit, email, password, error, setEmail, setPassword, setError, togglePassword}


}

export default useFormValidation