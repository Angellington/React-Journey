import { Box } from '@mui/material'
import React from 'react'
import ActionsLayer from './components/ActionsLayer/ActionsLayer'
import BackgroundContainer from './BackgroundContainer'

const Home = () => {
  return (
    <BackgroundContainer>
    <Box sx={{
        bgcolor: 'accent.main',
        color:' text.primary',
        p: 4,
        height: '100vh'
    }}>
        <ActionsLayer />
    </Box>
    </BackgroundContainer>    
   
  )
}

export default Home