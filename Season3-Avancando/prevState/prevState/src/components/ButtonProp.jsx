import { Button } from '@mui/material'

import { useState } from 'react'

const ButtonProp = (props) => {
    const colorMap = {
        blue: 'default',
        red: 'error',
        green: 'success',
        yellow: 'warning',
        purple: 'secondary',
        pink: 'primary',
    }
    
    const muiColor = colorMap[props.color] || 'default'


    return (
        <div>
            <Button variant='contained' color={muiColor}>
                {props.text}
            </Button>
        </div>
    )
}

export default ButtonProp