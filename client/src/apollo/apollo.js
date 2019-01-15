import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'

import { createClient } from './apollo-client'

class Apollo extends Component {
  state = {
    client: null
  }

  componentDidMount() {
    this.setState({ client: createClient() })
  }

  render() {
    if (!this.state.client) return null
    return (
      <ApolloProvider client={this.state.client}>
        { this.props.children }
      </ApolloProvider>
    )
  }
}

export default Apollo
