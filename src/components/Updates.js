import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Updates() {
    const navigate = useNavigate();
    const Update=()=>{
        navigate('/Form')
    }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "#FCFCFC",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: 800,
          height: "70%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: 5,
          border: "1px solid #ddd",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "#F5F5F5",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            left: 15,
            top: "10%",
            position: "absolute",
            background: "white",
            borderBottom: "1px solid #ddd",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            left: 15,
            top: "35%",
            position: "absolute",
            background: "white",
            borderBottom: "1px solid #ddd",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            left: 15,
            top: "60%",
            position: "absolute",
            background: "white",
            borderBottom: "1px solid #ddd",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            left: 15,
            top: "10%",
            position: "absolute",
            background: "white",
            borderBottom: "1px solid #ddd",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            left: 15,
            top: "35%",
            position: "absolute",
            background: "white",
            borderBottom: "1px solid #ddd",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            left: 15,
            top: "60%",
            position: "absolute",
            background: "white",
            borderBottom: "1px solid #ddd",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            left: 15,
            top: "10%",
            position: "absolute",
            background: "white",
            borderBottom: "1px solid #ddd",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            left: 15,
            top: "35%",
            position: "absolute",
            background: "white",
            borderBottom: "1px solid #ddd",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            left: 15,
            top: "60%",
            position: "absolute",
            background: "white",
            borderBottom: "1px solid #ddd",
          }}
        />
      </div>

      <div
        style={{
          width: "30%",
          height: "7%",
          position: "absolute",
          left: "5%",
          bottom: "5%",
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <button
          style={{
            left: "10%",
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
            fontSize: 14,
            fontFamily: "Poppins",
            background: "#176B87",
            color:'white',
            border:'none'
            
          }}
          onClick={Update}
        >
          Add Update
        </button>
      </div>

      <div
        style={{
          width: "100%",
          height: "5%",
          position: "absolute",
          left: "5%",
          top: "2%",
        }}
      >
        <div
          style={{
            position: "absolute",
            color: "#176B87",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          HydroAlert
        </div>
        <Link to={'/'}
          style={{
            left: "80%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            color: "black",
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default Updates;
