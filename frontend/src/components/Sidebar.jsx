import React, { useState } from 'react'
// import cock from "../assets/cock.png"
// import fox from "../assets/fox.png"
// import bear from "../assets/bear.png"
// import cow from "../assets/cow.png"
// import german_shepherd from "../assets/german_shepherd.png"
// import eagle from "../assets/eagle.png"
// import dolphin from "../assets/dolphin.png"
// import goat from "../assets/goat.png"



const Sidebar = (props) => {
  const [images, setImages] = useState([
    { id: 1, src: "src/assets/cock.png", x: 0, y: 0 },
    { id: 2, src: "src/assets/fox.png", x: 0, y: 0 },
    { id: 3, src: "src/assets/bear.png", x: 0, y: 0 },
    { id: 4, src: "src/assets/cow.png", x: 0, y: 0 },
    { id: 5, src: "src/assets/german_shepherd.png", x: 0, y: 0 },
    { id: 6, src: "src/assets/eagle.png", x: 0, y: 0 },
    { id: 7, src: "src/assets/dolphin.png", x: 0, y: 0 },
    { id: 8, src: "src/assets/goat.png", x: 0, y: 0 },
  ]);
  return (
    <>
      <div className="flex flex-col h-auto p-3 bg-white shadow w-30">

        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Animals</h2>
          </div>

          <ul>
            {images.map((image) => {
              return (
                <li key={image.id}  className="flex items-center space-x-2 mb-2 cursor-pointer">
                  <img key={image.id} src={image.src} alt="Dummy Image" className="w-20 h-20 object-contain rounded"
                    draggable="true"
                    onDragStart={(e) => {
                      props.handleDrag(e, image);
                    }}
                  />
                </li>
              )
            })}

            {/* <li className="flex items-center space-x-2 mb-2 cursor-pointer">
            <img src={fox} alt="Dummy Image" className="w-20 h-20 object-contain rounded"
                draggable="true"
                onDragStart={(e) => {
                  props.handleDrag(e);
                }}
              />
            </li>
            <li className="flex items-center space-x-2 mb-2 cursor-pointer">
            <img src={bear} alt="Dummy Image" className="w-20 h-20 object-contain rounded"
                draggable="true"
                onDragStart={(e) => {
                  props.handleDrag(e);
                }}
              />
            </li>

            <li className="flex items-center space-x-2 mb-2 cursor-pointer">
            <img src={cow} alt="Dummy Image" className="w-20 h-20 object-contain rounded"
                draggable="true"
                onDragStart={(e) => {
                  props.handleDrag(e);
                }}
              />
            </li>

            <li className="flex items-center space-x-2 mb-2 cursor-pointer">
            <img src={german_shepherd} alt="Dummy Image" className="w-20 h-20 object-contain rounded"
                draggable="true"
                onDragStart={(e) => {
                  props.handleDrag(e);
                }}
              />
            </li>

            <li className="flex items-center space-x-2 mb-2 cursor-pointer">
            <img src={eagle} alt="Dummy Image" className="w-20 h-20 object-contain rounded"
                draggable="true"
                onDragStart={(e) => {
                  props.handleDrag(e);
                }}
              />
            </li>

            <li className="flex items-center space-x-2 mb-2 cursor-pointer">
            <img src={dolphin} alt="Dummy Image" className="w-20 h-20 object-contain rounded"
                draggable="true"
                onDragStart={(e) => {
                  props.handleDrag(e);
                }}
              />
            </li>

            <li className="flex items-center space-x-2 mb-2 cursor-pointer">
            <img src={goat} alt="Dummy Image" className="w-20 h-20 object-contain rounded"
                draggable="true"
                onDragStart={(e) => {
                  props.handleDrag(e);
                }}
              />
            </li> */}


          </ul>
        </div>
      </div>

    </>
  )
}

export default Sidebar
