import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  table: {
    backgroundColor: theme.palette.primary.dark,
  },
  tableCell: {
    color: theme.palette.common.white,
  },
  iconButton: {
    color: theme.palette.common.white,
  },
}));

function Users() {
  const classes = useStyles();
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const usersCollectionRef = collection(firestore, "users");
    const getUsersData = async () => {
      try {
        const querySnapshot = await getDocs(usersCollectionRef);
        const users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsersData(users);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsersData();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await deleteDoc(doc(firestore, "users", userId));
      setUsersData((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdateUser = async (userId, updatedUser) => {
    try {
      await updateDoc(doc(firestore, "users", userId), updatedUser);
      setUsersData((prevUsers) =>
        prevUsers.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user))
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      {isLoading ? (
        <p>Loading users data...</p>
      ) : (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Name</TableCell>
              <TableCell className={classes.tableCell}>Surname</TableCell>
              <TableCell className={classes.tableCell}>Username</TableCell>
              <TableCell className={classes.tableCell}>Email</TableCell>
              <TableCell className={classes.tableCell}>Phone</TableCell>
              <TableCell className={classes.tableCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map((user) => (
              <TableRow key={user.id}>
                <TableCell className={classes.tableCell}>{user.firstNames}</TableCell>
                <TableCell className={classes.tableCell}>{user.surname}</TableCell>
                <TableCell className={classes.tableCell}>{user.username}</TableCell>
                <TableCell className={classes.tableCell}>{user.emailAddress}</TableCell>
                <TableCell className={classes.tableCell}>{user.contactNumbers}</TableCell>
                <TableCell className={classes.tableCell}>
                  <IconButton
                    className={classes.iconButton}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    className={classes.iconButton}
                    onClick={() => handleUpdateUser(user.id, { ...user, username: "NewUsername" })}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default Users;