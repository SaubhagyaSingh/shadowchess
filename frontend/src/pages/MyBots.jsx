import React from "react";
import Slider from "react-slick";
import Card from "../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyBots = () => {
  // Sample data for the cards
  const cardsData = [
    {
      id: 1,
      imageSrc: "https://via.placeholder.com/300?text=Bot+1",
      loadingPercentage: 30,
    },
    {
      id: 2,
      imageSrc: "https://via.placeholder.com/300?text=Bot+2",
      loadingPercentage: 60,
    },
    {
      id: 3,
      imageSrc: "https://via.placeholder.com/300?text=Bot+3",
      loadingPercentage: 90,
    },
    // Add more cards if needed
  ];

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="mb-4 text-[24px]">
        <h1>Select A bot to Play Against</h1>
      </div>
      <div className="w-[60%]">
        <Slider {...settings}>
          {cardsData.map((card) => (
            <div key={card.id} className="p-2">
              <Card
                imageSrc={card.imageSrc}
                loadingPercentage={card.loadingPercentage}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MyBots;
