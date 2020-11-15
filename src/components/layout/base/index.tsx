import React from 'react'
import { Route } from 'react-router'

/** Types */
import { routeType } from '../../../routes/types'

/** Component */
import { Base, ContainerWhite } from './component'

const BaseLayoutRoute: React.FC<routeType> = ({ Component, ...rest }: routeType) => {
  return (
    <Base>
      <ContainerWhite>
        <Route {...rest} render={(props) => <Component {...props} />} />
      </ContainerWhite>
    </Base>
  )
}

export default BaseLayoutRoute
