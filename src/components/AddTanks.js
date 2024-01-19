import React, { useState } from "react";
import { firestore, storage } from "../firebase";
import { TextField, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: 400,
    margin: "0 auto",
  },
}));

function AddProductForm() {
  const classes = useStyles();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(image.name);
      await fileRef.put(image);

      const imageUrl = await fileRef.getDownloadURL();

      await firestore.collection("tanks").add({
        image: imageUrl,
        name,
        price,
        id: Date.now(),
      });

      setImage("");
      setName("");
      setPrice("");

      console.log("Product added successfully.");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Grid container justify="center">
      <Grid item>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Image"
                  type="file"
                  fullWidth
                  onChange={handleImageChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  type="text"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Price"
                  type="text"
                  fullWidth
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Product
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AddProductForm;
