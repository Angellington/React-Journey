import React, { useContext } from 'react'
import ChangeCounter from '../../components/chnageCounter/ChangeCounter'
import { useTitleColorContext } from '../../hook/useTitleColorContext'

const Home = () => {

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color})
  }

  return (
    <div>
      <div style={{ color: color}}>HOME</div>
        <ChangeCounter />
        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Vermelho</button>
        </div>
      </div>
  )
}

export default Home