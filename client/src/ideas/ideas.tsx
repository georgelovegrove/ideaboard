import React from 'react'

import { IDEAS } from './graphql'
import { graphql } from 'react-apollo'
import IdeaCard from './idea-card'
import AddIdea from './add-idea'

import styles from './ideas.module.css'

const Ideas = ({ ideasQuery: { loading, ideas } }: Props) => {
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

interface Props {
  ideasQuery: IdeasQuery
}

interface IdeasQuery {
  ideas: Ideas[],
  loading: boolean
}

interface Ideas {
  id: string,
  title: string,
  body: string
}

interface Response {
  ideasQuery: IdeasQuery
}

export default graphql<any, Response, {}>(IDEAS, { name: 'ideasQuery' })(Ideas)
