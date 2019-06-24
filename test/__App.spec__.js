import React from 'react';
import { render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import '@testing-library/react/cleanup-after-each'
import App from '../src/App'

describe('App', () => {
   it('run', () => {
      render(<App />)
   })
})