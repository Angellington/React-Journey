import React from 'react'
import useCounterContext from '../../hook/useCounterContext'

const About = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      Essa é a contagem: {counter}
    </div>
  )
}

export default About