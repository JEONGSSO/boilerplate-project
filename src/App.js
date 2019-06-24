import React from 'react'
import { hot } from 'react-hot-loader'
import Profile from "./Profile";

const App = () => <Profile id={'good'} name={'kim'} />

export default hot(module)(App)
