import React from 'react'

import styles from './idea-card.module.css'

const Card = ({ idea }) =>
  <div className={styles.container}>
    <h4 className={styles.title}>
      { idea.title }
    </h4>
    <p className={styles.body}>
      { idea.body }
    </p>
  </div>

export default Card
