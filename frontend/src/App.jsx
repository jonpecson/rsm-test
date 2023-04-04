

import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Canvas from './components/Canvas'


function App() {

  const [dragUrl, setDragUrl] = useState("")

  const handleDrag = (e, image) => {
    const payload = JSON.stringify({ id: image.id });
    e.dataTransfer.setData("imageId", payload);
    setDragUrl(e.target.src)
  }

  return (
    <>
      <div className="flex">
        <Sidebar dragUrl={dragUrl} handleDrag={handleDrag} />
        <Canvas dragUrl={dragUrl} handleDrag={handleDrag} />

      </div>
    </>
  )
}

export default App
