import React from 'react'

import CircleAction from '../circle-action'
import { Action } from './types'

import styles from './card.module.css'

const Card = ({ children, LeftComponent, RightComponent, ...props }: Props) =>
  <div
    className={styles.container}
    {...props}
  >
    { children }
    { LeftComponent && <LeftComponent /> }
    { RightComponent && <RightComponent /> }
  </div>

interface Props {
  children: any,
  LeftComponent?: any,
  RightComponent?: any,
  onPointerEnter?: () => void,
  onPointerLeave?: () => void
}

export default Card
