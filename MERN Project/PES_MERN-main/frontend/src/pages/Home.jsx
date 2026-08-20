import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <ul>
        <li>
          <Link to="/state">Use State Example</Link>
        </li>

        <li>
          <Link to="/form">Form</Link>
        </li>

        <li>
          <Link to="/effect">Effects</Link>
        </li>

        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;