import React from 'react'
import styles from './index.module.css'
export default function SearchComponent({text, subtext}) {
    return (
    <div className={styles.searchComponentContainer}>
      <img src={"/tshirt.png"} height={"70px"} width={'70px'} />
      <div className={styles.containerSearchcomponent}>
        <p>{text}</p>
        <p className={styles.categoryText}>{subtext}</p>
      </div>
    </div>
    )
}
