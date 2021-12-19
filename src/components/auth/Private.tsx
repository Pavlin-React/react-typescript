import React from 'react'
import { Login } from './Login'
import { ProfileProp } from './profile';

type IProps = {
  isLoggedIn: boolean
  Component: React.ComponentType<ProfileProp>
}

export let Private = ({isLoggedIn, Component}: IProps) => {
  if (isLoggedIn) {
    return <Component name='Vishwas' />
  } else {
    return <Login/>
  }
}