import React from 'react'

import styles from './circle-action.module.css'

const CircleAction = ({ icon, onClick, left, right }) =>
  <div
    onClick={onClick}
    className={`
      ${styles.container}
      ${left && styles.left}
      ${right && styles.right}
    `}
  >
    <img src={icon} alt="icon" className={styles.icon} />
  </div>

export default CircleAction
