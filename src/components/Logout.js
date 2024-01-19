import React from "react";
import { Link } from "react-router-dom";
function Logout() {
  return (
    <div>
      <h2>Logout</h2>
      <p>Thank You!</p>
      <Link to="/">Go to the home page</Link>
    </div>
  );
}
export default Logout;
