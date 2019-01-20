import React from 'react'

import CircleAction from './circle-action'
import { Action } from './types'

import styles from './card.module.css'

const Card = ({ children, leftAction, rightAction, ...props }: Props) =>
  <div
    className={styles.container}
    {...props}
  >
    { children }
    { leftAction && <CircleAction {...leftAction} left /> }
    { rightAction && <CircleAction {...rightAction} right /> }
  </div>

interface Props {
  children: any,
  leftAction?: Action,
  rightAction?: Action,
  onPointerEnter?: () => void,
  onPointerLeave?: () => void
}

export default Card
