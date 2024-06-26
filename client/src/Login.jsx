import { useState } from "react";
import './styles.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function signup() {
    const [name,setName] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    const navigate =useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => 
            {console.log(result)
            if(result.data === "Sucess"){
                navigate('/home')
            }
      })
        .catch(err=> console.log(err))
    }




    return (
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-light  p-3 rounded w-25">
                <h2>Welcome Back...</h2>
                <form onSubmit={handleSubmit}>
                    {/* <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Your Name" autoComplete="off" name="email" className="form-control rounded-0" 
                        onChange={(e)=>setName(e.target.value)}/>
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0"
                        onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter Password" name="email" className="form-control rounded-0" 
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <Link to="/login" type="submit" className="btn btn-default border w-100  rounded-0 text-decoration-none">
                    Login
                </Link>
                    
                </form>
                <p>Dont Have An Account..</p>
                <Link to="/register" type="submit" className="btn btn-default border w-100  rounded-0 text-decoration-none">
                        Register
                    </Link>
                
               

            </div>
        </div>
    )
}

export default signup