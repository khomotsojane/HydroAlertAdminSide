import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const Login =()=>{
        navigate('/Updates')
    }
  return (
    <div className="row">
         <div className="col"
        style={{
          width: 413,
          height:500,
          background: "#FCFCFC",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 5,
          border: "0.30px solid",
          marginLeft:50,
          margin:50
          
        }}
      >
        <div
        
          style={{
            color: "black",
            fontSize: 25,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
            marginTop:50,
            textAlign:'center'
          }}
        >
          Welcome Back Officer
        </div>
        <input type="text" placeholder="Badge Number"
          style={{
            width: 329,
            height: 52,
            background: "white",
            borderRadius: 16,
            border: "1px #176B87 solid",
            marginTop:100,
            marginLeft:50
          }}
        />
        <input type="text" placeholder="Password"
          style={{
            width: 329,
            height: 52,
            background: "white",
            borderRadius: 16,
            border: "1px #176B87 solid",
            marginTop:30,
            marginLeft:50
          }}
        />
        <button style={{
            width: 329,
            height: 52,
            background: "#176B87",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 16,
            border: "1px #176B87 solid",
            marginTop:30,
            marginLeft:50
          }}
          onClick={Login}>Login
        </button>
        

    </div>
    <div className="col"> 
    <img style={{width: 551, height: 349,  marginTop:100}} src="./assets/water.jpg" />
    </div>
    </div>
  );
}

export default Login;
