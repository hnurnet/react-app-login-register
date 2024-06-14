import "./login.scss";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className='login'>
        <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button>Login</button>
                   <span style={{textAlign:"center"}}>Don't you have an account!
                   <Link to="/register" style={{textDecoration: "none"}}>  Register</Link>
                   </span>
                </form>
            </div>
        </div>
      
   
  )
}

export default Login

