import React from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../firebase";

function Form() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form values
    const location = e.target.elements.location.value;
    const notificationType = e.target.elements.notificationType.value;
    const time = e.target.elements.time.value;
    const dayOfWeek = e.target.elements.dayOfWeek.value;
    const message = e.target.elements.message.value;

    try {
      await firestore.collection(location).doc(notificationType).set({
        location,
        notificationType,
        time,
        dayOfWeek,
        message,
      });

      navigate("/Updates");
    } catch (error) {
      console.error("Error storing form data:", error);
    }
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
  const locations = ["Boyne", "Makanye", "Ga-Molepo", "Iraq", "Ga-Mothiba"];
  const notificationTypes = ["normal", "emergency"];

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
              <label>
                Location:
                <select
                  name="location"
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
                  {locations.map((place) => (
                    <option key={place} value={place}>
                      {place}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Notification Type */}
            <div style={{ width: "48%" }}>
              <label>
                Notification Type:
                <select
                  name="notificationType"
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
                  {notificationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* Update Button */}
          <div
            style={{
              width: "30%",
              height: "7%",
              position: "absolute",
              left: "calc(50% - 2px)",
              bottom: 15,
              background: "#176B87",
              borderRadius: 4,
              color: "white",
              fontSize: 16,
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Update
            </button>
          </div>

          {/* Time Input */}
          <div
            style={{
              width: "48%",
              position: "absolute",
              left: 15,
              top: "35%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>
              Time:
              <input
                type="time"
                name="time"
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
              />
            </label>
          </div>

          {/* Day of Week Input */}
          <div
            style={{
              width: "48%",
              position: "absolute",
              left: "calc(50% + 2px)",
              top: "35%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>
              Day of Week:
              <select
                name="dayOfWeek"
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
                {daysOfWeek.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Message Input */}
          <div
            style={{
              width: "96%",
              position: "absolute",
              left: 15,
              top: "60%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>
              Message:
              <textarea
                name="message"
                style={{
                  width: "100%",
                  height: 80,
                  resize: "none",
                  background: "white",
                  borderRadius: 4,
                  border: "1px solid #ddd",
                  paddingLeft: 14,
                  paddingTop: 8,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
