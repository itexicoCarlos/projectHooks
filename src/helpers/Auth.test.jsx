import React from 'react'
import {login, logout} from './Auth'

describe("Test function firebase", () => {
  it('Login funtion', () => {
    expect(login('kkis', '12313')).toBeTruthy()
  })

  it('Logout funtion', () => {
    expect(logout()).toBeTruthy()
  })
})