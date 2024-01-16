import reactLogo from '../assets/react.svg'

import { useNavigate } from 'react-router-dom'

import {
  motion,
  AnimatePresence,
  useAnimate,
  useMotionValue,
  animate,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Transition from './Transition'

const First = () => {
  const navigate = useNavigate()
  const numRef = useRef<any>()

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 5,
      onUpdate: (latest) => (numRef.current.textContent = latest.toFixed(0)),
    })

    return () => controls.stop()
  }, [])

  return (
    <Transition>
      <div>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </div>
      {/* <div>
        <motion.button
          onClick={() => setShow((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Click me!
        </motion.button>
      </div> */}
      {/* <AnimatePresence>
        {show && (
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            I should show
          </motion.p>
        )}
      </AnimatePresence> */}
      <div>
        <button onClick={() => navigate('/second')}>Second</button>
      </div>
      {/* <p ref={numRef}>0</p> */}
    </Transition>
  )
}

export default First
