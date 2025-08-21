import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <div className={styles["nav-container"]}>
        <img src="images/logo.png" alt="Do some Coding logo" className={styles.logo} />
        {/* <div className={styles["ctn-links"]}>
     <ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>

     </ul>
 */}

        </div>
      {/* </div> */}
    </nav>
  );
};

export default Navigation;
