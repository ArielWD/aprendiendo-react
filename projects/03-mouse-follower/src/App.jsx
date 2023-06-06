import { useEffect, useState } from 'react'

function Followmouse () {
  const [enabled, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: 0, y: 0 })
    }
  }, [enabled])
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        opacity: 0.8,
        borderRadius: '50%',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        height: 40,
        width: 40,
        transform: `translate( ${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnable(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App () {
  const [mounted, setMounted] = useState(false)
  return (
    <main>
      {mounted && <Followmouse />}
      <button onClick={() => { setMounted(!mounted) }}>Swicth Follow mouse</button>
    </main>
  )
}

export default App
