import React from 'react'

import { IDEAS } from './graphql'
import { graphql } from 'react-apollo'
import IdeaCard from './idea-card'
import AddIdea from './add-idea'

import styles from './ideas.module.css'

const Ideas = ({ ideasQuery: { loading, ideas } }) => {
  if (loading && !ideas) return <p>Loading...</p>
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ideas</h2>
      <div className={styles.ideasList}>
        <>
          { ideas && ideas.map(idea => <IdeaCard key={idea.id} {...{idea}} />) }
          <AddIdea />
        </>
      </div>
    </div>
  )
}

export default graphql(IDEAS, { name: 'ideasQuery' })(Ideas)
