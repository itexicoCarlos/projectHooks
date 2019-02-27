import React from 'react'
import {login} from './Auth'

describe("Test function firebase", () => {
  it('Login funtion', () => {
    expect(login('kkis', '12313')).toBeTruthy()
  })
})