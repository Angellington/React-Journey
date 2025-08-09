import { Box } from '@mui/material'
import React from 'react'
import ActionsLayer from './components/ActionsLayer/ActionsLayer'
import BackgroundContainer from './BackgroundContainer'

import styles from './style/Home.module.css'
import DataCard from './components/DataCard/DataCard'

const Home = () => {
  return (
    <BackgroundContainer>
      <Box className={styles.action}>
        <ActionsLayer />
      </Box>
      <Box className={styles.cards}>
        <DataCard />
      </Box>
    </BackgroundContainer>    
   
  )
}

export default Home