"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";

function Gallery({ product }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={product.image} alt={product.title} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-container md:col-span-3">
      <Slider {...settings}>
        <div>
          <img
            className="aspect-square object-contain rounded-md p-10"
            src={product.image}
            alt={product.title}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;
