import React, { Component } from 'react'

import { IDEAS } from './graphql'
import { graphql } from 'react-apollo'
import IdeaCard from './idea-card'

import styles from './ideas.module.css'

class Ideas extends Component {
  render() {
    const { ideasQuery: { loading, ideas } } = this.props
    if (loading && !ideas) return <p>Loading...</p>
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ideas</h2>
        <div className={styles.ideasList}>
          { (!ideas || ideas.length === 0) &&
            <p>No ideas... Start thinking!</p>
          }
          { ideas.length > 0 && ideas.map(idea =>
            <IdeaCard key={idea.id} {...{idea}} />
          )}
        </div>
      </div>
    )
  }
}

export default graphql(IDEAS, { name: 'ideasQuery' })(Ideas)
