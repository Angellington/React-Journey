import React from 'react'

import { useContext } from 'react'
import CounterContext from '../context/CounterContext'
const useCounterContext = () => {
  const context = useContext(CounterContext)

  // Validando context
  if(!context){
    console.log("Contexto não encontrado!")
  }

  return context

}

export default useCounterContext