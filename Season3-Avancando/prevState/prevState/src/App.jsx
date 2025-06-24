import { useState } from 'react'
import './App.css'

import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'
import Greetings from './components/Greetings'
import Card from './components/Card'
import { Button } from '@mui/material'
import ButtonProp from './components/ButtonProp'
import Usuarios from './components/Usuarios'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'

const App = () => {
  const [count, setCount] = useState(0)

  const name = 'Minerva Alves Barbosa'
  const [userName] = useState('Leticia Kuberayashi')

  const usuarios = [
    { nome: 'Leticia Kuberayashi', email: 'leti@gmail.com' },
    { nome: 'Minerva Alves Barbosa', email: 'minerva@gmail.com'},
  ]

  const cars = [
    {id: 1, brand: 'Fiat', model: 'Uno', year: 2023, color: 'Red', plate: 'VE3GSA', price: 123.233},
    {id: 2, brand: 'Kia', model: 'Onix', year: 2024, color: 'White', plate: 'VE3GSD', price: 223.233, newCar: true},
    {id: 3, brand: 'Chevrolet', model: 'Onix', year: 2024, color: 'White', plate: 'VE3GSD', price: 223.233, newCar: true},
    {id: 4, brand: 'Volkswagen', model: 'Gol', year: 2025, color: 'Black', plate: 'VE3GSF', price: 203.233}
  ]

  return (
    <>
      <div className="App">
        <h1>Contador</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(prev => prev + 1)}>Aumentar</button>
      </div>
      {/* <ListRender /> */}
      <ShowUserName name={userName} />
      <Greetings greetings={name} />
      <Card title="Sobre mim" content="SeventH-Heaven"/>
      <ButtonProp color='blue' text='Clique aqui!' />
      <ButtonProp color='pink' text='SeventH HeaveN' />
      <ButtonProp color='red' text='Kineorama' />
      <Usuarios usuarios={usuarios} />

      {/*Destructuring */}
      <CarDetails brand='VW' model='Fiat UNO' year={2025} color='Black' plate='VE3GSF' price={203.233}/>

      {/* Reaproveitamento */}
      <CarDetails brand='Fiat' model='Palio' year={2023} color='Red' plate='VE3GSA' price={123.233}/>
      <CarDetails brand='Chevrolet' model='Onix' year={2024} color='White' plate='VE3GSD' price={223.233} newCar={true}/>


      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id} 
          brand={car.brand} 
          model={car.model} 
          year={car.year} 
          color={car.color} 
          plate={car.plate} 
          price={car.price} 
          newCar={car.newCar}
        />
      ))}




      {/* Fragments */}
      <Fragments propFragment={'Herói'} />
    </>
  )
}

export default App
