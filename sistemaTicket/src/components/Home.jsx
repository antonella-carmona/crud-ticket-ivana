import React from 'react'
import NavBar from './NavBar'
import Panels from './Panels'
import Search from './Search'
import Grid from "./Grid"
const Home = () => {
  return (
    <div>
      <NavBar/>
      <Panels/>
      <Search/>
      <Grid/>
    </div>
  )
}

export default Home
