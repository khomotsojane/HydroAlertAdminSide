import React from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Updates')
  };

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Location = [
    "Enter Location",
    "Polokwane",
    "Turflop",
    "Boyne",
    "Seshego",
    "Moletji",
    "Nobody",
    "Mamahule",
  ];


  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "#FCFCFC",
        fontFamily: "Arial, sans-serif",
      }}
    >
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
      </div>

      {/* Main Content */}
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: "80%",
            maxWidth: 800,
            height: "70%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 10,
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              background: "#F5F5F5",
              borderRadius: 10,
              border: "0.30px solid",
            }}
          />
          <div
            style={{
              width: "100%",
              height: "80%",
              left: 15,
              top: "10%",
              position: "absolute",
              background: "white",
              borderBottom: "1px solid #ddd",
              padding: "20px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Location Input */}
            <div style={{ width: "48%", marginRight: "4%" }}>
            <select
                style={{
                  width: "100%",
                  height: 56,
                  background: "white",
                  borderRadius: 4,
                  border: "1px solid #ddd",
                  paddingLeft: 14,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                 {Location.map((places) => (
                    <option key={places} value={places}>
                      {places}
                    </option>
                  ))}
              </select>

            </div>

            {/* Notification Type */}
            <div style={{ width: "48%" }}>
              <select
                style={{
                  width: "100%",
                  height: 56,
                  background: "white",
                  borderRadius: 4,
                  border: "1px solid #ddd",
                  paddingLeft: 14,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                <option value="normal">Normal Update</option>
                <option value="emergency">Emergency</option>
              </select>
            </div>
          </div>

          {/* Update Button */}
          <div
            style={{
              width: "30%",
              height: "7%",
              position: "absolute",
              left: "70%",
              top: "90%",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
               
                borderRadius: "5px 5px 0 0",
              }}
            />
            <button
              style={{
                left: "25%",
                top: "50%",
                transform: "translateY(-50%)",
                position: "absolute",
                border:'none',
                background: "#176B87",
                color: "#F5F5F5",
                fontSize: 16,
                fontWeight: "500",
                textAlign: "center",
              }}
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>

          {/* Form Inputs */}
          <div
            style={{
              width: "40%",
              height: "60%",
              position: "absolute",
              left: "5%",
              top: "20%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Time Inputs */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 70,
              }}
            >
              <div style={{ width: "48%" }}>
                <input
                  type="time"
                  style={{
                    width: "100%",
                    height: 56,
                    background: "white",
                    borderRadius: 4,
                    border: "1px solid #ddd",
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                />
              </div>
              <div style={{ width: "100%", height: 56, marginBottom: 20 }}>
                <select
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "white",
                    borderRadius: 4,
                    border: "1px solid #ddd",
                    paddingLeft: 14,
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  {daysOfWeek.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message Input */}
            <div style={{ width: "100%", height: 240, marginBottom: 20 }}>
              <textarea
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#F5F5F5",
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  padding: 14,
                  fontSize: 16,
                  fontWeight: "500",
                }}
                placeholder="Enter Message"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
