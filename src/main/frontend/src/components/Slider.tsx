import React from "react";
import Carousel from "react-bootstrap/Carousel";

interface StoreImage {
  no: number;
  imageUrl: string;
}

interface SliderProps {
  imageData?: StoreImage[];
  eventImage?: StoreImage[];
}

const Slider: React.FC<SliderProps> = ({ imageData, eventImage }) => {
  const imageList = imageData || eventImage || [];

  return (
    <div>
      <Carousel>
        {imageList.map((store) => (
          <Carousel.Item key={store.no}>
            <img className="d-block w-100" src={store.imageUrl} alt={`Store Image-${store.no}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
