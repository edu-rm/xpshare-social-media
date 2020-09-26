import React from 'react'
import { Route as ReactRoute, RouteProps, Redirect } from 'react-router-dom'

import { useAuth } from '../hooks/AuthContext'

interface IRouterProps extends RouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<IRouterProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth()

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return isPrivate == !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        )
      }}
    />
  )
}

export default Route
