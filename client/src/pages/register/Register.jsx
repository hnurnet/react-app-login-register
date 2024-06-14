import "./register.scss";

const Register = () => {
  return (
    <div className="register">
         <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="text" placeholder="Name"/>
                    <button>Register</button>
                </form>
            </div>
      
    </div>
  )
}

export default Register

