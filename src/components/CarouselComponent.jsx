import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
      </Carousel.Item>
      {/* Agrega más items según sea necesario */}
    </Carousel>
  );
};

export default CarouselComponent;
