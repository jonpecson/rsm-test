import { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseURL = "http://localhost:3000/images"

const URLImage = ({ image, index, handleDragEnd, coordinate }) => {

  const [img] = useImage(image.src, "Anonymous");
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      key={`${image}${index}`}
      draggable
      onDragEnd={(e) => handleDragEnd(image.id, e)}

    />
  );
};


async function saveObject({ src, x, y }) {
  console.log("🚀 ~ file: Canvas.jsx:29 ~ saveObject ~ src, x, y:", src, x, y)
  const result = await axios
    .post(baseURL, { src, x, y })
    .catch(function (error) {
      // handle error
      console.warn(error.message);
    });

  return result;
}

const Canvas = ({ dragUrl }) => {

  console.log(dragUrl);

  const stageRef = useRef();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        console.log(response.data[0].images)
        setImages(JSON.parse(response.data[0].images));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  const saveCanvas = () => {
    axios
      .post(baseURL, { images: JSON.stringify(images) })
      .catch(function (error) {
        // handle error
        console.warn(error.message);
      });
  };



  const handleDragEnd = (id, e) => {
    console.log(id, e.target.x(), e.target.y())

    const newImages = [...images];
    const index = newImages.findIndex((image) => image.id === id);
    newImages[index] = {
      ...newImages[index],
      x: e.target.x(),
      y: e.target.y(),
    };
    setImages(newImages);
  };


  return (
    <>
      <div>

        <div className="flex">

          <div className="w-3/4  h-12 pl-2 pt-3">
            <h1 className="font-bold"> Try dragging your favorite animals into the canvas</h1>
          </div>
          <div className="w-1/4  h-12 pt-2 mb-2 text-right">
            <button onClick={saveCanvas} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Save
            </button>
          </div>



        </div>

        <div
          onDrop={(e) => {
            e.preventDefault();
            console.log(e);
            const { id } = JSON.parse(e.dataTransfer.getData("imageId"));
            console.log("🚀 ~ file: Canvas.jsx:74 ~ Canvas ~ index, image:", id, dragUrl)

            // register event position
            stageRef.current.setPointersPositions(e);
            console.log(stageRef.current.getPointerPosition())

            // setCoordinate(stageRef.current.getPointerPosition())

            // add image
            setImages(
              images.concat([
                {
                  ...stageRef.current.getPointerPosition(),
                  src: dragUrl,
                  id: uuidv4()

                },
              ])
            );
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <Stage
            width={window.outerWidth * 0.9}
            height={window.outerHeight * 0.909}
            style={{ border: '1px solid grey' }}
            ref={stageRef}
          >
            <Layer>
              {images && images.map((image, index) => {
                return <URLImage image={image} key={index} handleDragEnd={handleDragEnd} />;
              })}
            </Layer>
          </Stage>
        </div>
      </div>
    </>
  );
};

export default Canvas;