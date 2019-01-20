import React from 'react'

import CircleAction from '../../components/circle-action'

const HideFormAction = ({ onClick }: any) =>
  <CircleAction
    left
    onClick={onClick}
    icon={require('../../../assets/icons/cross-red.svg')}
  />

export default HideFormAction
