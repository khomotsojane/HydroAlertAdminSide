import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firestore } from "../firebase";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell>Notification Type</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Day</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {updates.map((update) => (
              <TableRow key={update.id}>
                <TableCell>{update.location}</TableCell>
                <TableCell>{update.notificationType}</TableCell>
                <TableCell>{update.time}</TableCell>
                <TableCell>{update.dayOfWeek}</TableCell>
                <TableCell>{update.message}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdate(update.id)}
                    style={{ marginRight: "8px" }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(update.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
        <Button
          variant="contained"
          color="primary"
          style={{
            left: "10%",
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
            fontSize: 14,
            fontFamily: "Poppins",
          }}
          onClick={() => navigate("/Form")}
        >
          Add Update
        </Button>
      </div>
    </div>
  );
}

export default Updates;
