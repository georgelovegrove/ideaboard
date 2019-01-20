import React from 'react'

import styles from './circle-action.module.css'

const CircleAction = ({ icon, onClick, left, right }: Props) =>
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

interface Props {
  icon: string,
  onClick: () => void,
  left?: boolean,
  right?: boolean
}

export default CircleAction
