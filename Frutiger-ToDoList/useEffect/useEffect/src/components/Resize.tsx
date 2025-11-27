import { useEffect, useState } from 'react'

const Resize = () => {
    const widthWindow = window.innerWidth
    const heightWindow = window.innerHeight

    const [windowSize, setWindowSize] = useState({ width: widthWindow, height: heightWindow})

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
    }, [])
    
    

  return (
    <div>{windowSize.width} and {windowSize.height}</div>
  )
}

export default Resize