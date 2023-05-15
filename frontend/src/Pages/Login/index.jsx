/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../app/actions/user.actions";
import LoginImage from "../../assets/login.png";
import Ima from "../../assets/google.jpeg"

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    dispatch(login(user));
  };
  return (
    <div className="container mt-5 mb-5 card" style={{backgroundColor:"white",height:"550px",width:"600px"}} >
      <div className="card-body" >
        <div className="column">
          
            <div className="text-center">
              <h1 className="mt-2">LOGIN | FoodCitric</h1>
              
            </div>
          
          
            <form onSubmit={handleSubmit}>
              <div className="mt-5 mb-3">
                <label className="form-label" style={{fontSize:"25px",fontFamily:"serif"}}>Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your username with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" style={{fontSize:"25px",fontFamily:"serif"}}>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-dark">
                LOGIN
              </button>
            </form>
           
            <hr />
            <Link to="/forgotpassword" className="text-decoration-none">
              Forgot Password
            </Link>
          
        </div> &nbsp;
        <div>
          <button>
              <img
              
                   src={Ima}
                   style={{height:"auto",width:"200px",border:"red"}}
                   
                   onClick={{}}
              />
              </button>

            </div>
      </div>
      
    </div>
    
  );
}

export default Login;
