import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";

function Orders() {
  const [ordersData, setOrdersData] = useState([]);

  const getOrdersData = async () => {
    try {
      const pendingOrdersCollectionRef = collection(firestore, "pendingOrders");
      const querySnapshot = await getDocs(pendingOrdersCollectionRef);
      const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrdersData(orders);
    } catch (error) {
      console.error("Error fetching pending orders:", error);
    }
  };

  useEffect(() => {
    getOrdersData();
  }, []);

  const handleApprove = async (orderId) => {
    try {
      await updateDoc(doc(firestore, "pendingOrders", orderId), {
        approved: true,
      });
      // Refresh the data after approval
      getOrdersData();
    } catch (error) {
      console.error("Error approving order:", error);
    }
  };

  const handleDecline = async (orderId) => {
    try {
      await updateDoc(doc(firestore, "pendingOrders", orderId), {
        approved: false,
      });
      // Refresh the data after decline
      getOrdersData();
    } catch (error) {
      console.error("Error declining order:", error);
    }
  };

  return (
    <div
      style={{ backgroundColor: "#263043", padding: "20px", color: "#f5f5f5" }}
    >
      <Typography variant="h2">Orders</Typography>
      {ordersData.length > 0 ? (
        <List>
          {ordersData.map((order) => (
            <ListItem key={order.id}>
              <ListItemText
                primary={`${order.firstNames} ${order.surname}`}
                secondary={
                  <>
                    <Typography style={{ color: "#f5f5f5" }}>
                      Contact: {order.contactNumbers}
                    </Typography>
                    <Typography style={{ color: "#f5f5f5" }}>
                      Email: {order.emailAddress}
                    </Typography>
                    <Typography style={{ color: "#f5f5f5" }}>
                      Address: {order.addressLineOne}, {order.cityName},{" "}
                      {order.suburbName}, {order.suburbCode}
                    </Typography>
                  </>
                }
              />
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleApprove(order.id)}
                >
                  Approve
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDecline(order.id)}
                >
                  Decline
                </Button>
              </div>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>Loading pending orders...</Typography>
      )}
    </div>
  );
}

export default Orders;