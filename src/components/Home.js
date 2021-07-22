import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section>
        <h1>Invenire</h1>
        <article>Project concept</article>
        <div>
          <ol>
            <p>How to use</p>
            <li>set1</li>
            <li>set2</li>
            <li>set3</li>
            <li>set4</li>
          </ol>
        </div>
        <div>
          <h4>Directory</h4>
          <p>
            Don't have an account? <NavLink to="/signup">Signup</NavLink>
          </p>
          <p>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;