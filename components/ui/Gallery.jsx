"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";

function Gallery() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`/product/gt710 (${i + 1}).jpg`} />
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
            className="w-full rounded-md"
            src="/product/gt710 (1).jpg"
            alt="gt7101"
          />
        </div>
        <div>
          <img
            className="w-full rounded-md"
            src="/product/gt710 (2).jpg"
            alt="gt7102"
          />
        </div>
        <div>
          <img
            className="w-full rounded-md"
            src="/product/gt710 (3).jpg"
            alt="gt7103"
          />
        </div>
        <div>
          <img
            className="w-full rounded-md"
            src="/product/gt710 (4).jpg"
            alt="gt7104"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;
