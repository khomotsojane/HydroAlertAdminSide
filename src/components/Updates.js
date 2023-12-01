import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firestore } from "../firebase";

function Updates() {
  const navigate = useNavigate();
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const updatesRef = firestore.collection("Boyne");
        const snapshot = await updatesRef.get();
        const updatesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUpdates(updatesData);
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };

    fetchUpdates();
  }, []);

  const handleUpdate = (updateId) => {
    navigate(`/Form/${updateId}`);
  };

  const handleDelete = async (updateId) => {
    try {
      await firestore.collection("updates").doc(updateId).delete();
      setUpdates((prevUpdates) =>
        prevUpdates.filter((update) => update.id !== updateId)
      );
    } catch (error) {
      console.error("Error deleting update:", error);
    }
  };

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
          background: "#F5F5F5",
          border: "1px solid #ddd",
        }}
      >
        <table className="table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Notification Type</th>
              <th>Time</th>
              <th>Day</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {updates.map((update) => (
              <tr key={update.id}>
                <td>{update.location}</td>
                <td>{update.notificationType}</td>
                <td>{update.time}</td>
                <td>{update.dayOfWeek}</td>
                <td>{update.message}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(update.id)}
                    style={{ marginRight: "8px" }}
                  >
                    Update
                  </button>
                  <button onClick={() => handleDelete(update.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            color: "white",
            border: "none",
          }}
          onClick={() => navigate("/Form")}
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
        <Link
          to={"/"}
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
