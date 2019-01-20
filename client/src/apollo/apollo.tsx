import React from 'react'
import { ApolloProvider } from 'react-apollo'

import Client from './apollo-client'

const Apollo = ({ children }: any) =>
  <ApolloProvider client={Client}>
    { children }
  </ApolloProvider>

export default Apollo
