import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { firestore } from "../firebase";

const FormContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  position: "relative",
  background: "#fcfcfc",
  fontFamily: "Arial, sans-serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#4caf50",
  color: "white",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
}));

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
    <FormContainer>
      <h2>Update Form</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="location-label">Location:</InputLabel>
              <Select
                labelId="location-label"
                id="location"
                name="location"
                label="Location"
              >
                {locations.map((place) => (
                  <MenuItem key={place} value={place}>
                    {place}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="notificationType-label">
                Notification Type:
              </InputLabel>
              <Select
                labelId="notificationType-label"
                id="notificationType"
                name="notificationType"
                label="Notification Type"
              >
                {notificationTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="time"
              name="time"
              label="Time"
              type="time"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="dayOfWeek-label">Day of Week:</InputLabel>
              <Select
                labelId="dayOfWeek-label"
                id="dayOfWeek"
                name="dayOfWeek"
                label="Day of Week"
              >
                {daysOfWeek.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <SubmitButton type="submit">Update</SubmitButton>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
}

export default Form;
