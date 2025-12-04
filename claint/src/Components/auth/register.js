import { useEffect, useState } from "react";
import {useRegisterFuncMutation} from "./authApiSlice"
import {useNavigate} from "react-router-dom"

const Register = () => {

    const [register,{isError,isSuccess,error,isLoading}]= useRegisterFuncMutation();
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: ''
    })

    useEffect(()=>{
       if(isSuccess){
            navigate("/login")
        }
    },[isSuccess])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData)
    }

    return (
        <div className="register-container">
            <h2>Register</h2>
            {isError&&JSON.stringify(error)}
            <form onSubmit={(e)=>handleSubmit(e)} className="register-form">
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input onChange={(e)=>handleChange(e)} type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={(e)=>handleChange(e)} type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>handleChange(e)} type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>handleChange(e)} type="password" id="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
