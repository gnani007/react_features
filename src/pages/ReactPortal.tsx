import {useState} from 'react'
import Model from "../utils/Model"

const ReactPortal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
      <h1>Hello React Portal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <Model>
          <h2>Portal Modal</h2>
          <p>This is rendered outside of `#root` but still part of React tree.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Model>
      )}
    </div>
    )
}

export default ReactPortal