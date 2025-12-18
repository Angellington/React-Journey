import React, { useContext } from 'react'
import CounterContext from '../../context/CounterContext'
import ChangeCounter from '../../components/chnageCounter/ChangeCounter'

const Home = () => {
  return (
    <div>
      <div>HOME</div>
      <ChangeCounter />
          </div>
  )
}

export default Home