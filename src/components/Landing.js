import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const Login =()=>{
        navigate('/Login')
    }
  return (
    <div>
      <div style={{ height: "60px", display: "flex" }}>
        <div className="column" />
        <h3 style={{ color: "#176B87", marginLeft: 50 }}>HydroAlert</h3>
        <div className="column" style={{ flex: "100%" }} />
        <button
          style={{
            height: "25px",
            width: "10%",
            marginTop: "20px",
            backgroundColor: "#176B87",
            fontFamily: "Poppins",
            color: "white",
            border: "none",
            marginRight: "30px",
          }}
         onClick={Login}
        >
          Login
        </button>
      </div>
      <div>
        <div
          style={{ width: 499, marginLeft: 50, marginTop: 50 }}
    
        >
          <span
            style={{
              color: "#176B87",
              fontSize: 40,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: 100,
            }}
          >
            HydroAlert
          </span>
          <span
            style={{
              color: "#235998",
              fontSize: 40,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: 30,
            }}
          >
            ,{" "}
          </span>
          <span
            style={{
              color: "black",
              fontSize: 40,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Fast and Quality Water Delivery.
          </span>
        </div>
        <div
          style={{
            width: 519,
            color: "#545151",
            fontSize: 20,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
            marginLeft: 50,
            marginTop: 30,
          }}
        >
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </div>
      </div>
    </div>
  );
}

export default Home;
