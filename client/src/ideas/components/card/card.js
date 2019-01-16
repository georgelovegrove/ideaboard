import React from 'react'

import CircleAction from './circle-action'

import styles from './card.module.css'

const Card = ({ children, leftAction, rightAction, ...props }) =>
  <div
    className={styles.container}
    {...props}
  >
    { children }
    { leftAction && <CircleAction {...leftAction} left /> }
    { rightAction && <CircleAction {...rightAction} right /> }
  </div>

export default Card
