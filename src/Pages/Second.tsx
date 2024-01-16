import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Transition from './Transition'
import { useState } from 'react'

const Second = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  return (
    <motion.div>
      <div>Second</div>
      {show && (
        <motion.ul>
          {[...Array(10).keys()].map((i) => (
            <motion.li
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.4 * i,
              }}
            >
              {i}
            </motion.li>
          ))}
        </motion.ul>
      )}
      <button onClick={() => setShow((prev) => !prev)}>Click</button>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/')}
        >
          First
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Second
