import React from "react";
import styles from "./index.module.css";

import { FaTimes } from "react-icons/fa";

function Popup(props) {
  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <div className={styles.closeBtn} onClick={() => props.setTrigger(-1)}>
          <FaTimes color={"#fff"} />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
