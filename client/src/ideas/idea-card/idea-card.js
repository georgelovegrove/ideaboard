import React, { Component } from 'react'

import Card from '../components/card'

import styles from './idea-card.module.css'

class IdeaCard extends Component {
  state = {
    onHover: false
  }

  setOnHover = onHover => () => this.setState({ onHover })

  render() {
    const { onHover } = this.state
    const { idea } = this.props

    const leftAction = {
      icon: require('../../assets/icons/trash-grey.svg'),
      onClick: () => {}
    }

    return (
      <Card
        onPointerEnter={this.setOnHover(true)}
        onPointerLeave={this.setOnHover(false)}
        rightAction={onHover && leftAction}
      >
        <h4 className={styles.title}>
          { idea.title }
        </h4>
        <p className={styles.body}>
          { idea.body }
        </p>
      </Card>
    )
  }
}


export default IdeaCard
