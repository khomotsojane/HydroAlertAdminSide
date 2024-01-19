import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { storage, firestore } from "../firebase"; // Import your Firebase configuration
import { Card, CardContent, Typography, Grid, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Tanks() {
  const [tanksData, setTanksData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tanksCollectionRef = collection(firestore, "tanks");
    const getTanksData = async () => {
      try {
        const querySnapshot = await getDocs(tanksCollectionRef);
        const tanks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTanksData(tanks);
      } catch (error) {
        console.error("Error fetching tanks:", error);
      }
    };
    getTanksData();
  }, []);

  const deleteTank = async (tankId, imageUrl) => {
    try {
      // Delete tank document from Firestore
      await deleteDoc(doc(firestore, "tanks", tankId));

      // Delete tank image from Firebase Storage
      await storage.refFromURL(imageUrl).delete();

      // Update tanksData state by removing the deleted tank
      setTanksData((prevTanksData) =>
        prevTanksData.filter((tank) => tank.id !== tankId)
      );
    } catch (error) {
      console.error("Error deleting tank:", error);
    }
  };

  const handleAddTanks = () => {
    navigate("/addtanks"); // Replace "/add-tanks" with the actual path of your "Add Tanks" page
  };

  return (
    <div>
      <h2>Tanks</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTanks}
        style={{ marginBottom: 16 }}
      >
        Add Tanks
      </Button>
      {tanksData.length > 0 ? (
        <Grid container spacing={2}>
          {tanksData.map((tank) => (
            <Grid item key={tank.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <img
                  src={tank.image}
                  alt={tank.name}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Name: {tank.name}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Price: R{tank.price}
                  </Typography>
                  {/* Add more fields as needed */}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteTank(tank.id, tank.imageUrl)}
                    style={{ marginTop: 16 }}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>Loading tanks data...</p>
      )}
    </div>
  );
}

export default Tanks;
